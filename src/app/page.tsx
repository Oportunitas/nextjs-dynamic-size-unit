"use client";
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() { 
	useEffect(() => {
		const setDPUnit = () => {
			const display_width: number = 
				window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			const display_height: number = 
				window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			const display_breadth: number = Math.sqrt(display_width * display_height) / 128;

			const width_limit	: number = display_width;
			const height_limit	: number = display_height;
			const abs_size_limit: number = Math.min(width_limit, height_limit) / 256;

			const horizontal_ratio	: number = display_width / display_height;
			const vertical_ratio	: number = display_height / display_width;
			const abs_ratio			: number = Math.min(horizontal_ratio, vertical_ratio);
			
			const dp_constant: number = abs_size_limit + (abs_ratio * display_breadth);
			document.documentElement.style.fontSize = `${dp_constant}px`;
    		console.log(display_breadth);
		}
			
		setDPUnit();
		window.addEventListener('resize', setDPUnit);
	}, [])

	return (
		<main 
			className={ clsx(
			`flex bg-gray-500 h-16dp`
			)}
		>
		</main>
	)
}
