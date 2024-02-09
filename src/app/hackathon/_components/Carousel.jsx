"use client";
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Themes from './Themes';

export default function NextJsCarousel() { 
		return ( 
			<div className='bg-white w-full mt-11'> 
			<Carousel className='p-0'> 
				<div> 
					<Themes className='w-[100%] h-[100vh]'/>
				</div> 
			</Carousel> 
			</div> 
		); 
	} 

