/** @format */

const API_KEY = 'f82df4d2fba2bdc1f183e8c4ba7fb696';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`);
	const json = await req.json();
	return json;
};

export const TmdbApi = {
	getHomeList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Originais do Netflix',
				items: await basicFetch(
					`/discover/tv?with_network=233&languange=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'trending',
				title: 'Recomendados para você',
				items: await basicFetch(
					`/trending/all/week?language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'top rated',
				title: 'Em alta',
				items: await basicFetch(
					`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'action',
				title: 'Ação',
				items: await basicFetch(
					`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'comedy',
				title: 'Comédia',
				items: await basicFetch(
					`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'horror',
				title: 'Terror',
				items: await basicFetch(
					`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(
					`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'documentary',
				title: 'Documentários',
				items: await basicFetch(
					`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
				),
			},
		];
	},
	getMovieInfo: async (movieId, type) => {
		let info = {};

		if (movieId) {
			switch (type) {
				case 'movie':
					return (info = await basicFetch(
						`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
					));

				case 'tv':
					return (info = await basicFetch(
						`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
					));

				default:
					// eslint-disable-next-line
					return (info = null);
			}
		}
	},
};
