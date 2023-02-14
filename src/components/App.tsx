import { Routes, Route } from 'react-router-dom';
import { Nav } from './common';
import { GlobalStyles } from '../styles/GlobalStyles';
import { GameDetailsPage } from '../pages';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('../pages/Home'));
const NewGamesPage = lazy(() => import('../pages/NewGamesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const PopularPage = lazy(() => import('../pages/PopularPage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const UpcomingPage = lazy(() => import('../pages/UpcomingPage'));

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular-games" element={<PopularPage />} />
          <Route path="/new-games" element={<NewGamesPage />} />
          <Route path="/upcoming-games" element={<UpcomingPage />} />
          <Route path="/game/:slug" element={<GameDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
