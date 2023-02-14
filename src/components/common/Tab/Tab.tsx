import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PathId } from '../../../util/types';
import { fadeIn } from '../../../styles/GlobalStyles';
import { memo } from 'react';

type Props = {
  pathId: PathId;
};

const Tab: React.FC<Props> = ({ pathId }) => {
  return (
    <StyledTab variants={fadeIn} initial="hidden" animate="show">
      <Link
        to="/popular-games"
        className={`title ${pathId === 'popular-games' ? 'active' : ''}`}
      >
        Popular Games
      </Link>
      <Link
        to="/new-games"
        className={`title ${pathId === 'new-games' ? 'active' : ''}`}
      >
        New Games
      </Link>
      <Link
        to="/upcoming-games"
        className={`title ${pathId === 'upcoming-games' ? 'active' : ''}`}
      >
        Upcoming Games
      </Link>
    </StyledTab>
  );
};

// Styles
const StyledTab = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 20rem;
    height: 4rem;
    margin: 0 0.1rem;
    color: #efefef;
    background: #333;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease-out;

    &:hover {
      background: #444;
    }

    &.active {
      color: #333;
      background: #efefef;
      border-bottom: 3px solid #ff7676;
    }
  }

  @media (max-width: 600px) {
    width: 80%;
    /* .title {
      padding: 1rem;
    } */
  }
`;

export default memo(Tab);
