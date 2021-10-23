/** @format */

import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function MovieRow({ title, items }) {
	const [scrollX, setScrollX] = useState(0);
	const handleLeftArrow = () => {
		let x = scrollX + Math.round(window.innerWidth / 2);

		if (x > 0) {
			x = 0;
		}

		setScrollX(x);
	};

	const handleRightArrow = () => {
		let x = scrollX - Math.round(window.innerWidth / 2);
		let listW = items.results.length * 150;

		if (window.innerWidth - listW > x) {
			x = window.innerWidth - listW - 60;
		}

		setScrollX(x);
	};

	return (
		<div className='movieRow'>
			<h2>{title}</h2>
			<div onClick={handleLeftArrow} className='movieRow--left'>
				<NavigateBeforeIcon style={{ fontSize: 50 }} />
			</div>
			<div onClick={handleRightArrow} className='movieRow--right'>
				<NavigateNextIcon style={{ fontSize: 50 }} />
			</div>

			<div className='movieRow--listarea'>
				<div
					className='movieRow--list'
					style={{
						marginLeft: scrollX,
						width: items.results.length * 150,
					}}>
					{items.results.length > 0 &&
						items.results.map(
							(item, key) =>
								item.poster_path && (
									<div key={key} className='movieRow--item'>
										{
											<img
												key={key}
												alt={item.title}
												src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
											/>
										}
									</div>
								)
						)}
				</div>
			</div>
		</div>
	);
}
