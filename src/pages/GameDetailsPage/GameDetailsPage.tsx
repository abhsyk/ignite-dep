import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { smallImage } from '../../util/smallImage';
import { LoadingSpinner, CardShadow } from '../../components/ui';
import { Platforms, Rating } from '../../components/game';
import { fadeIn, Error } from '../../styles/GlobalStyles';
import { useParams } from 'react-router-dom';

const GameDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { loadGameDetails } = useAction();
  const { game, screen, loading, errorMsg } = useTypedSelector(
    (state) => state.gameDetails
  );

  // Load game
  useEffect(() => {
    slug && loadGameDetails(slug);
  }, [slug, loadGameDetails]);

  if (errorMsg) {
    return (
      <Error>
        <p>{errorMsg}. Please try again later.</p>
      </Error>
    );
  }

  return (
    <>
      <AnimatePresence>
        {loading && (
          <CardShadow loading={loading}>
            <LoadingSpinner />
          </CardShadow>
        )}
        {!loading && game && (
          <CardShadow loading={loading}>
            <Details
              variants={fadeIn}
              initial="hidden"
              animate="show"
              layoutId={slug}
              onClick={(e) => e.stopPropagation()}
            >
              <Stats>
                {/* Rating */}
                <Rating game={game} slug={slug!} />
                <Info>
                  {/* Platforms */}
                  <Platforms platforms={game.platforms} />
                </Info>
              </Stats>
              {game.website && (
                <Website>
                  <a
                    href={game.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website Link
                  </a>
                </Website>
              )}
              {game.background_image && (
                <Media>
                  <motion.img
                    layoutId={`image ${slug}`}
                    src={smallImage(game.background_image, 1280)}
                    alt={game.name}
                  />
                </Media>
              )}

              <Description>
                <p>{game.description_raw}</p>
              </Description>
              <div className="gallery">
                {screen?.results.map((screen) => (
                  <img
                    key={screen.id}
                    src={smallImage(screen.image, 1280)}
                    alt="game-screen"
                  />
                ))}
              </div>
            </Details>
          </CardShadow>
        )}
      </AnimatePresence>
    </>
  );
};

// Styles
const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 3rem 5rem;
  background: #222;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.9);
  margin-top: 5rem;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
  @media (max-width: 1024px) {
    padding: 2rem 3rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  width: 100%;
  /* align-items: center; */
  justify-content: space-between;

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Info = styled(motion.div)`
  color: #666;
  text-align: center;
  @media (max-width: 1024px) {
    text-align: unset;
  }
`;

const Website = styled.p`
  margin-top: 2rem;
  font-size: 1.4rem;
  a {
    color: #ff7676;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
  &::first-letter {
    font-size: 200%;
    margin-right: 0.2rem;
  }
  @media (max-width: 1024px) {
    margin: 3rem 0;
  }
`;

export default GameDetailsPage;
