import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GameType } from '../../../util/types';
import { useAction } from '../../../hooks/useAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../../../util/smallImage';
import { popup } from '../../../styles/GlobalStyles';

type Props = {
  game: GameType;
};

const GameItem: React.FC<Props> = ({ game }) => {
  const { loadGameDetails } = useAction();
  const image = smallImage(game.background_image, 640);
  const released = new Date(game.released).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={game.slug}
      onClick={() => loadGameDetails(game.slug)}
    >
      <Link to={`/game/${game.slug}`}>
        <motion.img
          layoutId={`image ${game.slug}`}
          src={image ?? '/images/image-not-found.png'}
          alt={game.name}
        />
        <motion.h3 layoutId={`title ${game.slug}`}>{game.name}</motion.h3>
        <p>{released}</p>
      </Link>
    </StyledGame>
  );
};

// Styles
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  padding-bottom: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default GameItem;
