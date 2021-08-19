/** @format */

import React from 'react';
import './Header.css';

export default function Header({black}) {
	return (
		<header className={black ? "black" : ''}>
			<div className='header--logo'>
				<a href='/'>
					<img src='netflix-logo.svg' />
				</a>
			</div>
			<div className='header--profile'>
				<a href='/'>
					<img src='profile.jpg' />
				</a>
			</div>
		</header>
	);
}
