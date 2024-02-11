"use client";

import Navbar from "../components/EventHeader";

export default function ForgetPassword() {

    const page =`
    <!DOCTYPE html>
        <html lang="en" >
        <head>
          <meta charset="UTF-8">
          <title>Coming soon </title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Muli:400,800'>
        
        
        </head>
        <body>
        
        
        <main class="soon"> 
        <div id="nuotron">
          <img src="https://i.imgur.com/46OUqzg.png" alt="" class="logo">
        </div>
        
        </div>
        <bdo dir="rtl"></bdo><a id="text"  target="_blank">
          <div class="hover">
            <div>Coming Soon...</div>
           
          </div>
          <div class="website">On The Way</div>
          <div class="nuotron">Anokha</div>
          <div class="agency">2024</div></a>
        </main>
        
        </body>
        </html>
        
        
        <style>
        * {
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
        
        
          .hover div {
          font-size: 32px; 
        }
        
        
        .logo {
          width: 100px; 
          height: auto; 
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg); 
          animation: spin 4s linear infinite; 
        }
        
        @keyframes spin {
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        
        main{
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        
        #nuotron {
          position: relative;
        }
        
        #text {
          position: relative;
        }
        
        
        
        html,
        body {
          width: 100%;
          height: 100%;
        }
        body {
          position: relative;
          direction: ltr;
          text-align: center;
          font-family: 'Muli', sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
          background-color: #000000;
          color: #fff;
          -webkit-font-smoothing: antialiased;
        }
        ::-moz-selection {
          background-color: rgba(0,0,0,0.21);
          color: #fff;
        }
        ::selection {
          background-color: rgba(0,0,0,0.21);
          color: #fff;
        }
        ::-moz-selection {
          background-color: rgba(0,0,0,0.21);
          color: #fff;
        }
        #nuotron {
          top: 50%;
          left: 50%;
          width: 84px;
          height: 84px;
          margin-top: -42px;
          margin-left: -42px;
          transform: rotate(45deg);
        }
        #nuotron,
        #nuotron *,
        #nuotron *:before {
          display: block;
          position: absolute;
        }
        
        #text {
          top: 50%;
          left: 50%;
          width: 182px;
          height: 182px;
          margin-top: -91px;
          margin-left: -91px;
        }
        #text,
        #text > * {
          display: block;
          position: absolute;
          white-space: nowrap;
          transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
        }
        #text .hover,
        #text .website {
          top: 100%;
          left: 50%;
          letter-spacing: 2px;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.63);
        }
        #text .website {
          margin-top: 28px;
          opacity: 0;
        }
        #text .nuotron,
        #text .agency {
          font-size: 48px;
          font-weight: 800;
          line-height: 182px;
          letter-spacing: 30px;
          color: #fff;
          opacity: 0;
        }
        #text .nuotron {
          right: 100%;
          margin-right: -34px;
        }
        #text .agency {
          left: 100%;
        }
        #text:hover .nuotron,
        #text:hover .agency {
          letter-spacing: 8px;
          opacity: 1;
        }
        
        #text:hover .agency {
          letter-spacing: 6px;
          opacity: 1;
        }
        #text:hover .nuotron {
          margin-right: -18px;
        }
        #text:hover .hover {
          margin-top: 28px;
          opacity: 0;
        }
        #text:hover .website {
          margin-top: 0;
          opacity: 1;
        }
        </style>
    `;
    
    return (
        <>
        <Navbar />
        <div dangerouslySetInnerHTML={{ __html: page }}/>
        </>
    );
}