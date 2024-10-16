ARG NEXT_PUBLIC_IS_PRODUCTION
ARG NEXT_PUBLIC_PAY_U_KEY_TEST
ARG NEXT_PUBLIC_PAY_U_KEY_PROD

FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm i --force; 

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Pass them to the build process
ENV NEXT_PUBLIC_IS_PRODUCTION=${NEXT_PUBLIC_IS_PRODUCTION}
ENV NEXT_PUBLIC_PAY_U_KEY_TEST=${NEXT_PUBLIC_PAY_U_KEY_TEST}
ENV NEXT_PUBLIC_PAY_U_KEY_PROD=${NEXT_PUBLIC_PAY_U_KEY_PROD}

RUN npm run build; 

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Pass them to the build process
ENV NEXT_PUBLIC_IS_PRODUCTION=${NEXT_PUBLIC_IS_PRODUCTION}
ENV NEXT_PUBLIC_PAY_U_KEY_TEST=${NEXT_PUBLIC_PAY_U_KEY_TEST}
ENV NEXT_PUBLIC_PAY_U_KEY_PROD=${NEXT_PUBLIC_PAY_U_KEY_PROD}

# Disable NextJS sending telemetry data to Vercel
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3002

ENV PORT=3002

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
