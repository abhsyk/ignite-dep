import { motion } from 'framer-motion';
import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { PathId } from '../../../util/types';
import { Footer, Tab } from '../../common';
import { CardShadow, LoadingSpinner, ScrollToTop } from '../../ui';
import { fadeIn, Error } from '../../../styles/GlobalStyles';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const splitPath = location.pathname.split('/'); // ["","",""]
  const slug = splitPath[2]; // ../game/123456
  const pathId = splitPath[splitPath.length - 1] as PathId; // ex. popular-games

  const { loading, errorMsg } = useTypedSelector((state) => state.games);

  /* Change scrollbar when showing/hiding GameDetails */
  useEffect(() => {
    if (slug) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [slug]);

  if (errorMsg) {
    return (
      <Error>
        <p>{errorMsg}. Please try again later.</p>
      </Error>
    );
  }

  return (
    <>
      {/* Tab */}
      <Tab pathId={pathId} />

      {/* Loading */}
      {loading && (
        <CardShadow loading={loading}>
          <LoadingSpinner />
        </CardShadow>
      )}

      {/* Game List */}
      <GameList variants={fadeIn} initial="hidden" animate="show" exit="exit">
        {children}
      </GameList>

      <ScrollToTop />
      {/* Footer */}
      <Footer />
    </>
  );
};

// Styles
const GameList = styled(motion.div)`
  min-height: 100vh;
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

export default Layout;
