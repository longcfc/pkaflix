import { getOneMonthAgoReleaseDate } from "./utils";

export const GITHUB_BASE_URL = "https://github.com/longcfc/pkaflix";
export const GITHUB_AVATAR_URL = "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/240404943_2746514918973631_606230429522353047_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NohyCYjNUsYAX9dTYvF&_nc_ht=scontent.fhan2-4.fna&oh=8818db5ec3047b3edda6e53f8774e53c&oe=61AE3CC7";
//const GITHUB_ASSETS_BASE_URL = "https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix";
export const LANG = "en-US";
export const REGION = "US";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
export const FALLBACK_IMG_URL = `https://i.ibb.co/LZNKPd7/Pika.png`;
export const LOGO_URL = `https://i.ibb.co/K6sByc6/Pika-Flix-n-n-en.png`;
export const MOBILE_LOGO_URL = `https://i.ibb.co/C7tdL4M/Pikaflix-favicon-192.png`;
export const PROFILE_PIC_URL = `https://i.ibb.co/8YRN29F/Pikaflix-profilepic.png"`;
export const SIGNIN_BGIMG_URL = `https://i.ibb.co/pxTMZ4z/Pikaflix-signin-bg.jpg`;
export const TADUM_SOUND_URL = `https://media1.vocaroo.com/mp3/16xNj7vPvyUL`;
const ONEMONTHAGO = getOneMonthAgoReleaseDate();
const  REACT_APP_API_KEY  = "2d6ae51899b08a181900078ac59603c2";

const requests = {
	fetchSearchQuery: `/search/multi?api_key=${REACT_APP_API_KEY}&language=${LANG}&query=`,
	fetchTrendingAll: `/trending/all/week?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchReleasedMoviesByOneMonth: `/discover/movie?api_key=${REACT_APP_API_KEY}&primary_release_date.gte=${ONEMONTHAGO}&sort_by=popularity.desc&language=${LANG}`,
    // Movies
	fetchTrendingMovies: `/trending/movies/week?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchUpcomingMovies: `/movie/upcoming?api_key=${REACT_APP_API_KEY}&language=${LANG}`,
	fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&region=${REGION}`,
	fetchActionMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=28&sort_by=popularity.desc&language=${LANG}`,
	fetchAdventureMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=12&sort_by=popularity.desc&language=${LANG}`,
	fetchComedyMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
	fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=27&sort_by=popularity.desc&language=${LANG}`,
	fetchRomanceMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10749&sort_by=popularity.desc&language=${LANG}`,
	fetchWarMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10752&sort_by=popularity.desc&language=${LANG}`,
	fetchAnimationMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
	discoverMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
    // Series
	discoverSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchTrendingSeries: `/trending/tv/week?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213&sort_by=popularity.desc&language=${LANG}`,
	fetchActionAdventureSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=10759&sort_by=popularity.desc&language=${LANG}`,
	fetchAnimationSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
	fetchComedySeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
	fetchCrimeSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=80&sort_by=popularity.desc&language=${LANG}`,
	fetchDocumentarySeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=99&sort_by=popularity.desc&language=${LANG}`,
	fetchFamilySeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=10751&sort_by=popularity.desc&language=${LANG}`,
	fetchKidsSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=10762&sort_by=popularity.desc&language=${LANG}`,
	fetchSciFiFantasySeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=10765&sort_by=popularity.desc&language=${LANG}`,
};

export default requests;
