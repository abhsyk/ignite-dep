const BASE_URL = 'https://api.rawg.io/api/';
const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

// Get month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Get day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const popularGamesURL = (page: number) =>
  `${BASE_URL}games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page=${page}&page_size=12`;
export const upcomingGamesURL = (page: number) =>
  `${BASE_URL}games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page=${page}&page_size=12`;
export const newGamesURL = (page: number) =>
  `${BASE_URL}games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=released&page=${page}&page_size=12`;

export const gameDetailsURL = (slug: string) =>
  `${BASE_URL}games/${slug}?key=${API_KEY}`;

export const gameScreenshotURL = (slug: string) =>
  `${BASE_URL}games/${slug}/screenshots?key=${API_KEY}`;

export const searchGameURL = (searchWord: string, page: number) =>
  `${BASE_URL}games?search=${searchWord}&ordering=-rating&page=${page}&page_size=12&key=${API_KEY}`;
