import Navbar from './components/Header'
import Hero from './components/Hero'
import Info from './components/InfoDivs'
import SponsorsMarquee from './components/SponsorsMarquee'
import AnokhaMarquee from './components/AnokhaMarquee'
import Footer from './components/Footer'

// Use GSAP ScrollTrigger and Locomotive Scroll
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      
      <Navbar /> // Navbar. Let it remain thisway untill better one is designed
      <Hero /> // Hero section - Anokha logo on bottom left, spline div on right, 3 sections of 2 words each on the bottom right
      <SponsorsMarquee /> // Marquee of sponsors (Logos, will be added later)
      <Info /> // Info div, self scrolling like the one in video. Please create supporting components as needed
      <AnokhaMarquee /> // Marquee of Anokha Hashtags
      <Footer /> // FOoter - Design given
    </main>
  )
}
