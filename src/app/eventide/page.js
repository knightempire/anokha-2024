"use client";

import Navbar from "../components/EventHeader";
import WebGLApp from "../bg/WebGLApp";
import { useEffect, useRef, useState } from "react";

export default function ForgetPassword() {


  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });
  const [cardColor, setCardColor] = useState(webGLColors);
    const page =`
 
      
    <body>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'>
    <section class="intro">
      <div class="intro-content">
        <h1 class="pro_titlee">Eventide</h1>
        <p class="description">
          <span class="collage-art">Eventide </span> the 3-day cultural extravaganza of Anokha, has brought joy to thousands over the past decade through explosive performances
           from talented artists. The enchanting melodies of Raagasudha, our soulful music club, and the graceful performances of Natyasudha, 
           our energetic dance club have left our audience in awe. The highlight of this grand celebration, the pro show has featured passionate and 
           top-tier artists from the music industry. <br>
           Eventide  has become a platform for the celebration of India's rich cultural heritage and 
          diversity encouraging performers from all over the country. Between soulful classical music, scintillating film numbers,
           and powerful percussion, we have explored every genre you can name. This cultural experience has left an everlasting impression on our audience. 
     
      </div>
  
      <div class="card-container">
        <div style="--r: -15; --y: 40; --x: 50" class="card">
          <img src="https://i.imgur.com/1dQBPga.jpeg" alt="" style="width: 100%;">
        </div>
        <div style="--r: 5; --y: -30; --x: 30" class="card">
          <img src="https://i.imgur.com/IzzrByl.jpeg" alt="" />
        </div>
        <div style="--r: 15; --y: 50; --x: 0" class="card">
          <img src="https://i.imgur.com/oyxMzmY.jpeg" alt="" />
        </div>
      </div>
    </section>
  
  
  


  
    <section id="intro-club">
      <div class="split-beers">
        <div class="big">
          <article class="galleries">
            <img src="https://i.imgur.com/KRYEfhy.jpeg" alt="guitar player at concert" />
            <img src="https://i.imgur.com/rwsT2QC.jpeg" alt="duo singing" />
            <img src="https://i.imgur.com/z8h1axf.jpeg" alt="crowd cheering" />
            <img src="https://i.imgur.com/Unr2Afr.jpg" alt="singer performing" />
            <img src="https://i.imgur.com/R24hRLE.jpg" alt="singer fistbumping crowd" />
            <img src="https://i.imgur.com/zXx49mU.jpg" alt="man with a guitar singing" />
            <img src="https://i.imgur.com/Md4lsFZ.jpg" alt="crowd looking at a lighted stage" />
            <img src="https://i.imgur.com/9ekvey9.jpg" alt="woman singing on stage" />
          </article>
      </div>
    </div>

      <div class="inform">
        <h1 class="featured-pro_title" style="font-family: 'Gloria Hallelujah', cursive;">Raaga Night</h1>
        <p class="description">
          Every year, the stage comes alive with Raagasudha’s enthralling music performances! From heartfelt classical renditions to exciting 
          beats of contemporary tunes, each performance is a testament to the club’s versatility. The performers showcase their dedication and 
          collaborative effort, creating an electrifying atmosphere that leaves the audience spellbound. Every note is a masterpiece, showcasing 
          an impeccable blend of melody, pitch, rhythm, and harmony. Come witness this musical spectacle at Anokha 2024.
        </p>
      </div>
   
      <div class="split-beer">
        <div class="small">
          <article class="galleries">
            <img src="https://i.imgur.com/KRYEfhy.jpeg" alt="guitar player at concert" />
            <img src="https://i.imgur.com/rwsT2QC.jpeg" alt="duo singing" />
            <img src="https://i.imgur.com/z8h1axf.jpeg" alt="crowd cheering" />
            <img src="https://i.imgur.com/Unr2Afr.jpg" alt="singer performing" />
            <img src="https://i.imgur.com/R24hRLE.jpg" alt="singer fistbumping crowd" />
            <img src="https://i.imgur.com/zXx49mU.jpg" alt="man with a guitar singing" />
            <img src="https://i.imgur.com/Md4lsFZ.jpg" alt="crowd looking at a lighted stage" />
            <img src="https://i.imgur.com/9ekvey9.jpg" alt="woman singing on stage" />
          </article>
        </div>
      </div>
      
    </section>

   <section id="intro-club" style="margin-top: -10%;">
      <div class="inform">
        <h1 class="featured-pro_title" style="font-family: 'Gloria Hallelujah', cursive;"> Natya Night</h1>
        <p class="description">
          Natyasudha’s dance performance is an explosion of energy captivating the audience from the very first beat. Each member pours their passion
           into every movement and infuses their performance with infectious enthusiasm. Their catchy steps not only display the technical expertise 
           of the dancers but also invite the audience to become active participants in the experience. From the graceful elegance of traditional 
           forms to the high-energy beats of hip-hop, every routine leaves an indelible mark on the audience.
        </p>
      </div>
      <div class="split-beer">
        <div class="small">
          <article class="galleries">
            <img src="https://i.imgur.com/5Mq9Psi.jpeg" alt="guitar player at concert" />
            <img src="https://i.imgur.com/Cow5vCU.jpeg" alt="duo singing" />
            <img src="https://i.imgur.com/2QEnTq0.jpeg" alt="crowd cheering" />
            <img src="https://i.imgur.com/AyYbaQs.jpeg" alt="singer performing" />
            <img src="https://i.imgur.com/AcKrhby.jpeg" alt="singer fistbumping crowd" />
            <img src="https://i.imgur.com/ozgWWCA.jpeg" alt="man with a guitar singing" />
            <img src="https://i.imgur.com/UMZVJS7.jpeg" alt="crowd looking at a lighted stage" />
            <img src="https://i.imgur.com/q4dBQA7.jpeg" alt="woman singing on stage" />
          </article>
        </div>
      </div>

      <div class="split-beers">
        <div class="big">
          <article class="galleries">
            <img src="https://i.imgur.com/5Mq9Psi.jpeg" alt="guitar player at concert" />
            <img src="https://i.imgur.com/Cow5vCU.jpeg" alt="duo singing" />
            <img src="https://i.imgur.com/2QEnTq0.jpeg" alt="crowd cheering" />
            <img src="https://i.imgur.com/AyYbaQs.jpeg" alt="singer performing" />
            <img src="https://i.imgur.com/AcKrhby.jpeg" alt="singer fistbumping crowd" />
            <img src="https://i.imgur.com/ozgWWCA.jpeg" alt="man with a guitar singing" />
            <img src="https://i.imgur.com/UMZVJS7.jpeg" alt="crowd looking at a lighted stage" />
            <img src="https://i.imgur.com/q4dBQA7.jpeg" alt="woman singing on stage" />
          </article>
      </div>
    </div>


    </section>

    <style>

      .galleries {
        --size: 100px;
        display: grid;
        grid-template-columns: repeat(6, var(--size));
        grid-auto-rows: var(--size);
        margin-bottom: var(--size);
        place-items: start center;
        gap: 5px;
        
        &:has(:hover) img:not(:hover),
        &:has(:focus) img:not(:focus){
          filter: brightness(0.5) contrast(0.5);
        }
      
        & img {
          object-fit: cover;
          width: calc(var(--size) * 2);
          height: calc(var(--size) * 2);
          clip-path: path("M90,10 C100,0 100,0 110,10 190,90 190,90 190,90 200,100 200,100 190,110 190,110 110,190 110,190 100,200 100,200 90,190 90,190 10,110 10,110 0,100 0,100 10,90Z");
          transition: clip-path 0.25s, filter 0.75s;
          grid-column: auto / span 2;
          border-radius: 5px;
      
          &:nth-child(5n - 1) { 
            grid-column: 2 / span 2 
          }
      
          &:hover,
          &:focus {
            clip-path: path("M0,0 C0,0 200,0 200,0 200,0 200,100 200,100 200,100 200,200 200,200 200,200 100,200 100,200 100,200 100,200 0,200 0,200 0,100 0,100 0,100 0,100 0,100Z");
            z-index: 1;
            transition: clip-path 0.25s, filter 0.25s;
          }
          
          &:focus {
            outline: 1px dashed black;
            outline-offset: -5px;
          }
        }
      
      }
      

      </style>



<style>
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Young+Serif&display=swap");

/* -------------- */
/* DEFAULT VALUES */


/* ------ */
/* intro-club */

#intro-club {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 40px;
  min-height: 100dvh;
  overflow: hidden;
  color: white;
}
#intro-club {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


.inform {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px 50px;
}

.inform h1 {
  font-family: "Young Serif", serif;
  text-align: center;
  font-size: 3rem;
}

.inform p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.split-beer {
  display: flex;
  flex-direction: row;
}

.split-beers{
  display: flex;
  flex-direction: row;
}

.beer {
  max-width: 100%;
  width: 250px;
  border-radius: 20px;
  margin-left: 15px;
  border: 2px solid rgb(255, 255, 255);
  height: 30%;
}


.beer:nth-child(2) {
  transform: translateY(-1.5rem);
}




/* Media query for mobile devices */
@media (max-width: 600px) {
  #intro-club {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px; /* Adjust padding as needed */
  }

  .inform {
    padding: 20px; /* Adjust padding as needed */
    text-align: center; /* Center align text */
  }

  .inform h1 {
    font-size: 2.5rem; /* Decrease font size */
  }

  .inform p {
    font-size: 1rem; /* Decrease font size */
  }

  .split-beer {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three images in each row */
    gap: 10px; /* Adjust the gap between images as needed */
    justify-items: center;
  }

  .beer {
    height: 150px;
    max-width: 100%;
    width: calc(100% - 20px); /* Adjust the width of each image as needed */
    border-radius: 20px;
    border: 2px solid white;
  }

  .beer:nth-child(2) {
    margin-top: 0; /* Reset margin-top */
  }

  .split-beers {
    display: none; /* Hide big screen layout */
  }

  .split-beer {
    display: flex; /* Show small screen layout */
  }
}

/* Media query for devices with a minimum width of 601px (big screens) */
@media (min-width: 601px) {
  .split-beer {
    display: none; /* Hide small screen layout */
  }

  .split-beers {
    display: flex; /* Show big screen layout */
  }
}

</style>


    
  
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'>

<section class="pro">
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <div class="gradient"></div>
      <h1 data-animate="bottom" class="pro_title"> Pro Show </h1>
      <h1 data-animate="bottom" class="pro_title_span"> <span class="collage-art" style="font-size: 1em;"> Dua Lipa</span> </h1>
      <img class="hero" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/cee8040b-a98f-469e-b106-66ab49a41c32" alt="dua lipa" loading="lazy" />
      <div class="box-container">
        <div class="box-mobile" data-modal="dua-songs">
          <h1 style="align-self: center">Songs</h1>
        </div>
        <div data-animate="bottom" class="box overview">
          <h1 style="align-self: center">Overview</h1>
          <p>
            Dua Lipa is a famous singer from the United Kingdom. She was
            born on August 22, 1995, in London, England. Dua's love for
            music started when she was a kid...
          </p>
          <button class="more-btn" data-modal="dua-bio">
            <ion-icon class="more-btn-icon" name="add-circle-outline"></ion-icon>
          </button>
        </div>
        <div class="box-mobile" data-modal="dua-bio">
          <h1 style="align-self: center">Overview</h1>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<div class="sidebar" id="dua-bio">
<div class="sidebar-container">
  <div class="sidebar-header">
    <button class="close-btn">
      <ion-icon class="close-icon" name="arrow-back-outline"></ion-icon>Back
    </button>
  </div>
  <div class="sidebar-body bio">
    <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/71aab672-117e-4ffd-b300-558bb8ad4cca" alt="" loading="lazy" />
    <p>
      Dua Lipa is a famous singer from the United Kingdom. She was born on
      August 22, 1995, in London, England. Dua's love for music started
      when she was a kid. She began singing and even created covers of
      songs to share on the internet. Her first big hit was "New Rules,"
      which became a worldwide sensation.
    </p>
    <p>
      In 2017, she released her self-pro_titled debut album, "Dua Lipa," which
      had songs like "Be the One" and "IDGAF." People loved her music, and
      she won awards for her songs and albums.
    </p>
    <p>
      Dua Lipa is known for her cool style and her powerful voice. She's a
      talented songwriter and has a lot of hit songs that many people
      enjoy, including "Don't Start Now" and "Levitating."
    </p>
  </div>
</div>
</div>

<!-- Your scripts here -->
<script src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'></script>
<script src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'></script>
<script src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'></script>
<script>
// Your JavaScript code here
</script>
</body>
</html>



<script src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'></script>
<script src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'></script>
<script src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'></script><script>
var swiper = new Swiper(".swiper", {

});

swiper.enable();

// Sidebars

const moreBtns = document.querySelectorAll(".more-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const boxContainers = document.querySelectorAll(".box-container");
const mobileBoxes = document.querySelectorAll(".box-mobile");

moreBtns.forEach((btn) => {
btn.addEventListener("click", () => {
let modal = btn.getAttribute("data-modal");
document.getElementById(modal).style.display = "block";
body.classList.add("prevent-background-scroll");
boxContainers.forEach((container) => {
  container.style.display = "none";
});
});
});

closeBtns.forEach((btn) => {
btn.addEventListener("click", () => {
let modal = (btn.closest(".sidebar").style.display = "none");
body.classList.remove("prevent-background-scroll");
boxContainers.forEach((container) => {
  container.style.display = "grid";
});
});
});

document.addEventListener("click", (e) => {
if (e.target.classList.contains("sidebar")) {
e.target.style.display = "none";
body.classList.remove("prevent-background-scroll");
boxContainers.forEach((container) => {
  container.style.display = "grid";
});
}
});

mobileBoxes.forEach((btn) => {
btn.addEventListener("click", () => {
let modal = btn.getAttribute("data-modal");
document.getElementById(modal).style.display = "block";
body.classList.add("prevent-background-scroll");
boxContainers.forEach((container) => {
  container.style.display = "none";
});
});
});

</script>




<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Agbalumo&family=Kalam:wght@700&display=swap");




.pro img {
width: 100%;
}

.pro ul {
list-style-type: none;
}



.pro {
display: flex;
justify-content: center;
width: 100%;
height: 100vh;
}

.pro .swiper {
width: 100%;
height: 100%;
}

.pro .swiper-slide {
position: relative;
text-align: center;
font-size: 1.25rem;
display: flex;
justify-content: center;
align-items: center;
background-color: #040a22;
}

.pro .hero {
position: absolute;
bottom: 0;
z-index: 5;
width: 450px;
filter: contrast(90%);

}

.pro .pro_title_span {
position: absolute;
top: 20%;
left: 5%;
/* font-family: "Agbalumo", cursive; */
font-family: "Kalam", cursive;
font-size: 5rem;
color: #fff;
transition-delay: 3s;
}

.pro .pro_title {
position: absolute;
top: 2%;
left: center;
/* font-family: "Agbalumo", cursive; */
font-family: "Kalam", cursive;
font-size: 5rem;
color: #fff;
transition-delay: 3s;
}



.pro .gradient {
width: 500px;
height: 500px;
filter: blur(50px);
background-image: linear-gradient(#4ddc9e, #5b37eb, #f1307e);
animation: rotate 10s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

@keyframes rotate {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
}

/* ----------- */
/* BOX STYLES */

.pro .box-container {
position: absolute;
top: 13%;
right: 6%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
gap: 40px;
}

.pro .box {
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 250px;
aspect-ratio: 3/2;
border-radius: 20px;
color: #cbd5e1;
background: rgba(255, 255, 255, 0.095);
box-shadow: inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17),
inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39);
backdrop-filter: blur(70px);
padding: 20px 20px 30px;
z-index: 6;
}

.pro .box-mobile {
display: none;
}

.pro .box h1 {
position: relative;
text-align: center;
text-transform: uppercase;
font-size: 1.1rem;
margin-bottom: 10px;
}

.pro .box h1::before {
content: "";
position: absolute;
top: 95%;
width: 100%;
left: 0;
height: 3px;
border-radius: 5px;
background: linear-gradient(
89.7deg,
#2b60bc 0%,
#45329d 15%,
#822f99 30%,
#97174a 50%,
#822f99 70%,
#45329d 85%,
#2b60bc 100%
);
background-size: 200% 100%;
animation: line-animation 13s infinite linear;
}

@keyframes line-animation {
from {
background-position: 100%;
}
to {
background-position: -100%;
}
}

.pro .box p {
font-weight: 300;
font-size: 0.8rem;
}

.pro  .songs,
.pro .overview {
display: flex;
flex-direction: column;
align-items: flex-start;
}



.pro  .overview p {
text-align: start;
}

.pro  .more-btn {
position: absolute;
top: 93%;
left: 42%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
display: flex;
align-items: center;
justify-content: center;
background: rgba(220, 220, 220, 0.7);
backdrop-filter: blur(70px);
-webkit-backdrop-filter: blur(70px);
border: 1px solid rgba(255, 255, 255, 0.35);
border-radius: 50%;
padding: 5px;
cursor: pointer;
transform: rotate(0deg);
transition: all 0.5s linear;
}

.pro  .more-btn:hover {
background: rgba(220, 220, 220, 1);
transform: rotate(360deg);
}

.pro  .more-btn-icon {
font-size: 20px;
color: #2e2e2f;
}

/* ---------------- */
/* SLIDE ANIMATION */

.swiper-slide-active [data-animate] {
opacity: 1;
transform: none;
}

.swiper-slide-active .pro_title {
transition-delay: 0.6s;
}

.swiper-slide-active .songs {
transition-delay: 1s;
}

.swiper-slide-active .overview {
transition-delay: 1.4s;
}

[data-animate] {
opacity: 0;
transition: all 0.8s ease-out;
}

[data-animate="bottom"] {
transform: translate3d(0, 15px, 0);
}

/* -------------------- */
/* SIDEBAR */

body.prevent-background-scroll {
min-height: 100dvh;
overflow-y: hidden;
}

.sidebar {
display: none;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.5);
z-index: 20;
animation: openSidebar 0.6s ease-in-out 1 normal;
}

@keyframes openSidebar {
from {
opacity: 0;
}

to {
opacity: 1;
}
}

.sidebar-container {
position: absolute;
top: 0;
right: 0;
height: 100%;
width: 40%;
background: rgba(133, 133, 133, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
color: #fff;
z-index: 30;
}

.sidebar-header {
position: relative;
display: flex;
font-weight: 600;
padding: 15px 20px 10px;
font-size: 1.2rem;
}

.sidebar-header .close-btn {
position: sticky;
display: flex;
align-items: center;
gap: 5px;
top: 20px;
left: 20px;
background: transparent;
color: #fff;
font-weight: 600;
text-transform: uppercase;
border: 0;
outline: 0;
cursor: pointer;
}

.close-icon {
font-size: 1.8rem;
color: #efefef;
}

/* ------------------------ */
/* SIDEBAR - BIO CONTAINER */

.sidebar-body {
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 20px 50px 60px;
height: 100vh;
overflow-y: auto;
}

.sidebar-body > img {
max-width: 100%;
width: 250px;
aspect-ratio: 4/3;
object-fit: cover;
border-radius: 8px;
margin-bottom: 20px;
}

.sidebar-body > p {
margin-bottom: 20px;
color: #94a3b8;
}

/* ------------------------------ */
/* SIDEBAR - SONG LIST CONTAINER */

.song-list-container {
width: 40%;
}

.song-list-body {
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 40px 40px 60px;
height: 100vh;
overflow-y: auto;
}

.song-list-body h1 {
margin-bottom: 20px;
font-weight: 500;
font-size: 1.5rem;
}

.song-item {
display: grid;
grid-template-columns: 35% 55% 10%;
align-items: center;
margin-bottom: 20px;
/* background-color: #4ddc9e; */
}

.song-item img {
width: 100px;
aspect-ratio: 3/2;
border-radius: 10px;
object-fit: cover;
}

.song-pro_title {
display: flex;
flex-direction: column;
}

.song-pro_title p {
font-size: 0.8rem;
font-weight: 300;
}

.play-icon {
font-size: 1.8rem;
color: #efefef;
transition: all 0.5s ease;
}

.play-icon:hover {
font-size: 1.85rem;
color: #5834c4;
}

/* ---------- */
/* SCROLLBAR */

.sidebar-body::-webkit-scrollbar,
.song-list-body::-webkit-scrollbar {
width: 0.7rem;
}

.sidebar-body::-webkit-scrollbar-track,
.song-list-body::-webkit-scrollbar-track {
box-shadow: inset 0 0 0.375rem rgb(79, 78, 78);
border-radius: 0.8rem;
}

.sidebar-body::-webkit-scrollbar-thumb,
.song-list-body::-webkit-scrollbar-thumb {
box-shadow: inset 0 0 0.375rem rgba(238, 238, 238, 0.9);
outline: none;
border-radius: 0.8rem;
}

@media (max-width: 1250px) {
.pro_title {
top: 15%;
}
}

@media (max-width: 1200px) {
.hero {
width: 420px;
}
}

@media (max-width: 880px) {
.hero {
left: 15%;
width: 400px;
}

.pro_title {
top: 5%;
font-size: 5rem;
}

.sidebar-container {
width: 50%;
}

.song-list-container {
width: 70%;
}
}

@media (max-width: 700px) {
.box-container {
position: absolute;
top: 21%;
right: 6%;
gap: 0;
}

.box {
width: 150px;
}

.pro_title {
top: 5%;
font-size: 5rem;
}

.song-list-container {
width: 70%;
}
}

@media (max-width: 580px) {
.hero {
left: 10%;
}

.sidebar-container {
width: 70%;
}

.song-list-container {
width: 80%;
}
} 

@media (max-width: 500px) {
.gradient {
width: 300px;
height: 300px;
}

.hero {
width: 400px;
}


.pro_title {
top: 7%;
font-size: 4rem;
}

.box-container {
top: 60%;
right: 7%;
gap: 20px;
}

.box {
display: none;
}

.box-mobile {
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 150px;
aspect-ratio: 3/2;
border-radius: 20px;
color: #cbd5e1;
background: rgba(255, 255, 255, 0.095);
box-shadow: inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17),
  inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39);
backdrop-filter: blur(70px);
padding: 20px 20px 30px;
z-index: 6;
}

.sidebar-container {
width: 100%;
}

.song-list-container {
width: 100%;
}

.song-item {
grid-template-columns: 40% 50% 10%;
}
}
</style>

  
  
  
  
  

  
  
  
  
  



  
  
  
    <section class="featured" id="featured">
      <div class="gradient-line"></div>
      <h1 class="featured-pro_title">Gallery</h1>
      <div class="grid-area">
        <div class="item art-one">
          <img src="https://i.imgur.com/xcpliLs.jpg" >
        </div>
  
        <div class="item art-two">
          <img src="https://i.imgur.com/kAtTjTp.jpg" >
        </div>
  
        <div class="item art-three">
          <img
            src="https://i.imgur.com/0rikiXI.jpg">
        </div>
  
        <div class="item art-four">
          <img
            src="https://i.imgur.com/cErEvt4.jpg"
            alt="A Woman in Complexity" />
        </div>
  
        <div class="item art-five">
          <img src="https://i.imgur.com/OZFCaoD.jpg" >
        </div>
  
        <div class="item art-six">
          <img src="https://i.imgur.com/8KrmnP2.jpg" >
        </div>
  
        <div class="item art-seven">
          <img src="https://i.imgur.com/SKjJwNt.jpg" >
        </div>
  
        <div class="item art-eight">
          <img
            src="https://i.imgur.com/zXx49mU.jpg">
        </div>
  
        <div class="item art-nine">
          <img src="https://i.imgur.com/ZH9JDuV.jpg" >
        </div>
  
        <div class="item art-ten">
          <img src="https://i.imgur.com/hD41yPn.jpg" >
        </div>
  
        <div class="item art-eleven">
          <img
            src="https://i.imgur.com/Eg0xK16.jpg">
        </div>
  
        <div class="item art-twelve">
          <img src="https://i.imgur.com/61Um2Xk.jpg" >
        </div>
      </div>
  
      <div class="lightbox">
        <div class="slide prev">
          <i class="fa-solid fa-angle-left"></i>
        </div>
  
        <div class="slide next">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </section>
  </body>
  
  <script src='https://unpkg.com/scrollreveal'></script><script>
    // ScrollReveal JS
  
  ScrollReveal({ distance: "50px" });
  
  ScrollReveal().reveal(".pro_title", {
  delay: 200,
  easing: "ease-in",
  origin: "top",
  distance: "70px",
  duration: 900,
  });
  
  ScrollReveal().reveal(".description", {
  delay: 1000,
  easing: "ease-in",
  origin: "top",
  distance: "30px",
  duration: 1000,
  });
  
  ScrollReveal().reveal(".btn", {
  delay: 2000,
  easing: "ease-in-out",
  duration: 1000,
  });
  
  ScrollReveal().reveal(".card-container", {
  delay: 400,
  easing: "ease-in-out",
  origin: "right",
  distance: "800px",
  duration: 2500,
  });
  
  ScrollReveal().reveal(".gradient-line", {
  delay: 200,
  easing: "ease",
  origin: "left",
  distance: "1800px",
  duration: 3600,
  });
  
  ScrollReveal().reveal(".featured-pro_title", {
  delay: 400,
  easing: "ease-in",
  origin: "right",
  distance: "200px",
  duration: 1400,
  });
  
  ScrollReveal().reveal(".item", {
  delay: 1200,
  interval: 200,
  origin: "bottom",
  easing: "ease-in-out",
  duration: 400,
  });
  
  // Lightbox
  
  document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".item img");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".img-container img");
  const lightboxpro_title = document.querySelector(".img-container p");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const body = document.querySelector("body");
  
  let currentIndex;
  
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", function () {
      currentIndex = index;
      updateLightbox();
      lightbox.style.display = "flex";
      body.classList.add("prevent-background-scroll");
    });
  });
  
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      body.classList.remove("prevent-background-scroll");
    }
  });
  
  prevBtn.addEventListener("click", function () {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
  });
  
  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightbox();
  });
  
  function updateLightbox() {
    const currentImage = galleryImages[currentIndex];
    lightboxImage.src = currentImage.src;
    lightboxpro_title.textContent = currentImage.alt;
  }
  });
  </script>
  
  
  
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Gloria+Hallelujah&family=Montserrat:wght@400;500;600;700;800;900&display=swap");
  
 
  
  /* INTRO */
  
  .intro {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 30px;
  min-height: 100vh;
  width: 100%;
  padding: 80px 100px;
  }
  
  .intro-content {
  padding-right: 100px;
  }
  
  .intro-content h1 {
  color: transparent;
  font-family: "Gloria Hallelujah", cursive;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.4;
  animation: fade-in-out 12s linear infinite;
  }
  
  @keyframes fade-in-out {
  0% {
    color: #fff;
    filter: hue-rotate(0deg);
    text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff;
  }
  
  30%,
  70% {
    color: #fff;
    filter: hue-rotate(360deg);
    text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff;
  }
  
  100% {
    color: transparent;
    box-shadow: none;
    filter: hue-rotate(0deg);
  }
  }
  
  .collage-art {
  font-size: 1.4rem;
  font-family: 600;
  color: #fff;
  text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff;
  }
  
  .intro-content p {
  font-family: inherit;
  font-size: clamp(0.8rem, 4vw, 1.1rem);
  color: #94a3b8;
  font-weight: 500;
  line-height: 1.6;
  margin: 30px 0 50px;
  text-align: justify;
  }
  
  .card-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  
  .card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  aspect-ratio: 3/4;
  background: linear-gradient(#fff2, transparent);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  margin: 0 -45px;
  backdrop-filter: blur(10px);
  transform: rotate(calc(var(--r) * 1deg)) translateY(calc(var(--y) * 1px))
    translateX(calc(var(--x) * -1px));
  transition: all 0.8s linear;
  }
  
  .card img,
  .item img {
  width: 90%;
  height: 90%;
  }
  
  .item img {
  object-fit: cover;
  }
  
  .card-container:hover .card {
  margin: 0 10px;
  transform: rotate(0deg) translateY(0) translateX(0);
  }
  

  
  /* FEATURED */
  
  .featured {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 100px 80px;
  }
  
  .gradient-line {
  display: flex;
  justify-content: center;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background-color: #09c7fb;
  background-image: linear-gradient(
    90deg,
    rgb(9, 199, 251, 0.7) 0%,
    rgb(147, 251, 157, 0.7) 65%
  );
  margin-bottom: 35px;
  }
  
  .featured h1 {
  font-family: "Caveat", cursive;
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 600;
  color: #fff;
  text-shadow: 0 0 10px #18d25f, 0 0 20px #f8f8f8;
  margin-bottom: 60px;
  }
  
  .featured-pro_title {
  font-family: "Caveat", cursive;
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 600;
  color: #fff;
  text-shadow: 0 0 10px #18d25f, 0 0 20px #f8f8f8;
  margin-bottom: 60px;
  }

  .grid-area {
  display: grid;
  grid-template-columns: repeat(8, 100px);
  grid-template-rows: repeat(7, 100px);
  gap: 20px;
  }
  
  .item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#fff2, transparent);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  backdrop-filter: blur(10px);
  cursor: pointer;
  }
  
  .art-one {
  grid-area: 1 / 1 / 3 / 3;
  }
  
  .art-two {
  grid-area: 1 / 3 / 4 / 5;
  }
  
  .art-three {
  grid-area: 1 / 5 / 3 / 7;
  }
  
  .art-four {
  grid-area: 1 / 7 / 3 / 9;
  }
  
  .art-six {
  grid-area: 4 / 3 / 6 / 5;
  }
  
  .art-five {
  grid-area: 3 / 1 / 5 / 3;
  }
  
  .art-seven {
  grid-area: 3 / 5 / 5 / 7;
  }
  
  .art-eight {
  grid-area: 3 / 7 / 6 / 9;
  }
  
  .art-nine {
  grid-area: 5 / 1 / 8 / 3;
  }
  
  .art-ten {
  grid-area: 6 / 3 / 8 / 5;
  }
  
  .art-eleven {
  grid-area: 5 / 5 / 8 / 7;
  }
  
  .art-twelve {
  grid-area: 6 / 7 / 8 / 9;
  }
  
  .lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 10px;
  z-index: 20;
  animation: openLightbox 0.6s ease-in-out 1 normal;
  }
  
  @keyframes openLightbox {
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
  }
  
  .img-container {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: rgba(46, 46, 46, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: #fff;
  z-index: 30;
  }
  
  .img-container p {
  text-align: center;
  font-size: clamp(0.9rem, 4vw, 1.25rem);
  font-weight: 500;
  padding: 15px 20px;
  color: #fff;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  }
  
  .img-container img {
  max-width: 100%;
  width: 600px;
  aspect-ratio: 1/1;
  border-radius: 0 0 12px 12px;
  object-fit: cover;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  }
  
  .slide {
  position: absolute;
  top: 50%;
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  background: rgba(46, 46, 46, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  color: #fff;
  font-size: 2rem;
  padding: 20px;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 40;
  }
  
  .slide:hover {
  background: rgba(15, 14, 28, 0.9);
  }
  
  .prev {
  left: 14%;
  }
  
  .next {
  right: 14%;
  }
  
  @media (max-width: 1400px) {
  .intro {
    gap: 30px;
    padding: 80px 70px;
  }
  
  .intro-content {
    padding-right: 70px;
  }
  
  .btn {
    padding: 1rem 3rem;
  }
  }
  
  @media (max-width: 975px) {
  .intro {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
    grid-template-areas:
      "card-container"
      "intro-content";
    padding: 40px 60px 30px;
  }
  
  .intro-content {
    grid-area: intro-content;
    padding-right: 0;
    text-align: center;
  }
  
  .card-container {
    grid-area: card-container;
  }
  
  .card {
    max-width: 150px;
  }
  
  .featured {
    padding: 60px 70px 80px;
  }
  
  .grid-area {
    display: grid;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(9, 100px);
    gap: 20px;
    margin: 40px 30px 60px;
  }
  
  .art-four {
    grid-area: 8 / 1 / 10 / 3;
  }
  
  .art-eight {
    grid-area: 8 / 3 / 10 / 5;
  }
  
  .art-twelve {
    grid-area: 8 / 5 / 10 / 7;
  }
  }
  
  @media (max-width: 750px) {
  .grid-area {
    grid-template-columns: repeat(6, 90px);
    grid-template-rows: repeat(9, 90px);
  }
  
  .featured {
    padding: 60px 50px 80px;
  }
  
  .slide {
    font-size: 2rem;
    padding: 14px;
  }
  
  .prev {
    left: 5%;
  }
  
  .next {
    right: 5%;
  }
  }
  
  @media (max-width: 670px) {
  .grid-area {
    grid-template-columns: repeat(4, 110px);
    grid-template-rows: repeat(14, 110px);
  }
  
  .art-three {
    grid-area: 11 / 3 / 13 / 5;
  }
  
  .art-four {
    grid-area: 8 / 1 / 10 / 3;
  }
  
  .art-seven {
    grid-area: 13 / 3 / 15 / 5;
  }
  
  .art-eight {
    grid-area: 8 / 3 / 11 / 5;
  }
  
  .art-eleven {
    grid-area: 12 / 1 / 15 / 3;
  }
  
  .art-twelve {
    grid-area: 10 / 1 / 12 / 3;
  }
  }
  
  @media (max-width: 530px) {
  .intro {
    grid-template-rows: 45% 45%;
    gap: 20px;
    padding: 10px 60px 60px;
  }
  
  .intro-content {
    margin-top: 90px;
  }
  
  .grid-area {
    grid-template-columns: repeat(4, 90px);
    grid-template-rows: repeat(14, 90px);
  }
  }
  
  @media (max-width: 460px) {
  .intro {
    padding: 10px 30px 60px;
  }
  
  .card {
    max-width: 130px;
  }
  
  .grid-area {
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: repeat(14, 70px);
  }
  
  .featured {
    padding: 60px 40px 80px;
  }
  
  .featured h1 {
    margin-bottom: 0;
  }
  
  .img-container p {
    padding: 10px;
  }
  
  .slide {
    font-size: 1.4rem;
  }

 
}

/* New styles for responsiveness */
@media (max-width: 768px) {
.box.overview {
  display: none; /* Hide the overview section on small devices */
}
}



  </style>

  
  

    
    
  

    
    `;
    
    return (
        <>
        <Navbar />
        <WebGLApp colors={cardColor} className="-z-10" />
 <div dangerouslySetInnerHTML={{ __html: page }}/>
        </>
    );
}

