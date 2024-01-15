import Navbar from './components/Header'
import Hero from './components/Hero'
import Info from './components/InfoDivs'
import SponsorsMarquee from './components/SponsorsMarquee'
import AnokhaMarquee from './components/AnokhaMarquee'
import Footer from './components/Footer'
import WebGLApp from './bg/WebGLApp'

// Use GSAP ScrollTrigger and Locomotive Scroll

// Navbar. Let it remain thisway untill better one is designed. This is also mobile responsive, so dont touch yet
// Navbar modifcation - If logged in, then his gravatar image on top right. When clicked, dropdown to view profile, logout, else login button.
// Hero section - Anokha logo on bottom left, spline div on right, 3 sections of 2 words each on the bottom right
// Marquee of sponsors (Logos, will be added later)
// Info div, self scrolling like the one in video. Please create supporting components as needed
// Marquee of Anokha Hashtags
// FOoter - Design given
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar /> 
      <WebGLApp colors = {{color1: [0.64, 0.00, 0.00],color2: [0.21, 0.00, 0.00], color3: [0,0,0]}} />
      <Hero /> 
      <SponsorsMarquee /> 
      <Info /> 
      <AnokhaMarquee /> 
       <Footer current_page="home"/> {/* current_page is a prop that is used to highlight the current page in the footer. Possible values are home, team, contact, privacy policy} */}
    </main>
  )
}
