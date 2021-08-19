/** @format */

import React from 'react';
import './FeaturedMovie.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function FeaturedMove({ item }) {
	let firstDate = new Date(item.first_air_date);
	let genres = [];
	for (let i of item.genres) {
		genres.push(i.name);
	}

	let description = item.overview;

	if (description.length > 250) {
		description = description.substring(0, 250) + '...';
	}
	return (
		<section
			className='featured'
			style={{
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
			}}>
			<div className='featured--vertical'>
				<div className='featured--horizontal'>
					<div className='featured--name'>{item.original_name}</div>
					<div className='featured--info'>
						<div className='featured--points'>{item.vote_average} pontos</div>
						<div className='featured--year'>{firstDate.getFullYear()}</div>
						<div className='featured--seasons'>
							{item.number_of_seasons} temporada
							{item.number_of_seasons !== 1 ? 's' : ''}
						</div>
					</div>
					<div className='featured--description'>{description}</div>
					<div className='featured--buttons'>
						<a className='featured--watchbutton' href={`/watch/${item.id}`}>
							<ArrowRightIcon
								style={{
									marginleft: -4,
									fontSize: 40,
									overflow: 'hidden',
								}}
							/>
							<span>Assistir</span>
						</a>
						<a className='featured--mylistbutton' href={`/list/add/${item.id}`}>
							<span className='material-icons'>add</span>{' '}
							<span>Minha lista</span>
						</a>
					</div>
					<div className='featured--genres'>
						<strong>Gêneros: </strong>
						{genres.join(', ')}
					</div>
				</div>
			</div>
		</section>
	);
}
