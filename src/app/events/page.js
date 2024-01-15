import React from 'react'
import Header from '../components/EventHeader'
import Footer from '../components/Footer'
import EventLander from "./components/EventLander" 

// Use GSAP ScrollTrigger and Locomotive Scroll

// Navbar. Let it remain thisway untill better one is designed. This is also mobile responsive, so dont touch yet
// Navbar modifcation - If logged in, then his gravatar image on top right. When clicked, dropdown to view profile, logout, else login button.
// Hero section - Anokha logo on bottom left, spline div on right, 3 sections of 2 words each on the bottom right
// Marquee of sponsors (Logos, will be added later)
// Info div, self scrolling like the one in video. Please create supporting components as needed
// Marquee of Anokha Hashtags
// FOoter - Design given
const EventsHome = () => {
  return (
    <div className="flex min-h-screen flex-col  bg-indigo-950">
      <Header/>
      <div className='mt-12 mb-12 md:mt-20 lg:mt-8'>
      <EventLander />
      </div>
       <Footer current_page="home"/> {/* current_page is a prop that is used to highlight the current page in the footer. Possible values are home, team, contact, privacy policy} */}
    </div>
  )
}

export default EventsHome;