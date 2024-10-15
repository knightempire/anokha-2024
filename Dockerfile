FROM node:20-alpine 

WORKDIR /anokha

COPY . .

ENV NEXT_PUBLIC_URL=https://anokha.amrita.edu

RUN npm ci

EXPOSE 3000

RUN npm run build

CMD ["npm","run","start"]
