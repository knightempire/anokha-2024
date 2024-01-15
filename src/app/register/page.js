import Navbar from '../components/Header'
import Footer from '../components/Footer'
import RegisterPage from './components/RegisterPage'
import SignUpForm from './components/SignUpForm'

// Use GSAP ScrollTrigger and Locomotive Scroll

// Navbar. Let it remain thisway untill better one is designed. This is also mobile responsive, so dont touch yet
// Navbar modifcation - If logged in, then his gravatar image on top right. When clicked, dropdown to view profile, logout, else login button.
// Hero section - Anokha logo on bottom left, spline div on right, 3 sections of 2 words each on the bottom right
// Marquee of sponsors (Logos, will be added later)
// Info div, self scrolling like the one in video. Please create supporting components as needed
// Marquee of Anokha Hashtags
// FOoter - Design given1
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <div className="block space-y-24">
                <Navbar />
                <RegisterPage />
            </div>
        </main>
    )
}
