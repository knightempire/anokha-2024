import React from 'react'
import Marquee from "react-fast-marquee";


const SponsorsMarquee = () => {
  return (
    <div>
              <Marquee
        pauseOnHover="true"
        gradient="false"
        gradientColor="[0, 0, 0]"
        speed={80}
        className="h-14 bg-lime-100"
      >
        <span class="text-4xl mx-4 text-black">Sponsor1</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor2</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor4</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor5</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor1</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor2</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor4</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor5</span>
        <span class="text-4xl mx-4 text-black">•</span>
                <span class="text-4xl mx-4 text-black">Sponsor1</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor2</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor4</span>
        <span class="text-4xl mx-4 text-black">•</span>

        <span class="text-4xl mx-4 text-black">Sponsor5</span>
        <span class="text-4xl mx-4 text-black">•</span>
      </Marquee>
    </div>
  )
}

export default SponsorsMarquee