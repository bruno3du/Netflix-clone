/** @format */

import React, { useEffect, useState } from 'react';
import './App.css';
import { TmdbApi } from './TmdbApi';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App() {
	const [movieList, setMovieList] = useState([]);
	const [featuredData, setFeaturedData] = useState(null);
	const [blackHeader, setBlackHeader] = useState(false);

	async function selectingFeatured(originals) {
		let randomChosen = await Math.floor(
			Math.random() * originals[0].items.results.length
		);
		let chosen = originals[0].items.results[randomChosen];
		let selectChosen = await TmdbApi.getMovieInfo(chosen.id, 'tv');

		if (selectChosen.backdrop_path && selectChosen.overview) {
			return selectChosen;
		} else {
			return await selectingFeatured(originals);
		}
	}

	useEffect(() => {
		const loadAll = async () => {

			//Pegando a lista completa
			let list = await TmdbApi.getHomeList();
			setMovieList(list);

			//Selecionando Featured
			let originals = list.filter((list) => list.slug === 'originals');
			let chosen = await selectingFeatured(originals);
			
			
			setFeaturedData(chosen);

		};
		loadAll();
	}, []);

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 30) {
				setBlackHeader(true);
			} else {
				setBlackHeader(false);
			}
		};
		window.addEventListener('scroll', scrollListener);
		// return () => {
		// 	window.removeEventListener('scroll', scrollListener);
		// };
	}, []);

	return (
		<div className='page'>
			<Header black={blackHeader} />
			{featuredData && <FeaturedMovie item={featuredData} />}
			<section className='lists'>
				{movieList.map((item, key) => {
					return (
						<MovieRow
							title={item.title}
							items={item.items}
							key={key}></MovieRow>
					);
				})}
			</section>

			<footer>
				Feito por Bruno <br />
				Direitos de Imagem para Netflix <br />
				Imagens retirados do site Tmdb.
			</footer>
			{movieList.length <=  0 && (
				<div className='loading'>
					<img
						className='loader'
						src='Netflix_LoadTime.gif'
						alt='loading'></img>
				</div>
			)}
		</div>
	);
}

export default App;
