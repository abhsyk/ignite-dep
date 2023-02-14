import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { memo, useCallback } from 'react';
import { GameType } from '../../../util/types';

type Props = {
  game: GameType;
  slug: string;
};

const Rating: React.FC<Props> = ({ game, slug }) => {
  const getStars = useCallback((rating: number) => {
    const stars = [];
    const full = Math.round(rating / 0.1) * 0.1;
    const half = full / 2 < rating;
    for (let i = 1; i <= full; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (half && full % rating !== 0) {
      stars.push(<FaStarHalf key="half" />);
    }

    return stars;
  }, []);

  return (
    <StyledRating>
      <motion.h3 layoutId={`title ${slug}`}>{game.name}</motion.h3>

      {game.rating > 0 && (
        <p>
          Rating: {game.rating}
          <span>{getStars(game.rating)}</span>
        </p>
      )}
    </StyledRating>
  );
};

// Styles
const StyledRating = styled(motion.div)`
  span {
    display: block;
    color: #ff7676;
  }
`;

export default memo(Rating);
