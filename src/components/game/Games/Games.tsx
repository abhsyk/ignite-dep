import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useAction } from '../../../hooks/useAction';
import { FetchGamesData, Option } from '../../../util/types';
import { GameItem } from '../../game';

type Props = {
  fetchGamesData: FetchGamesData;
  title: string;
  option: Option;
};

const Games: React.FC<Props> = ({ fetchGamesData, title, option }) => {
  const { setPage } = useAction();
  const { games, count } = fetchGamesData;

  return (
    <>
      {games.length && (
        <>
          <h2>{title}</h2>
          <StyledGames>
            {games.map((game) => (
              <GameItem key={game.id} game={game} />
            ))}
          </StyledGames>
          {games.length < count && (
            <ButtonWrapper>
              <button type="button" onClick={() => setPage(option)}>
                More
              </button>
            </ButtonWrapper>
          )}
        </>
      )}
    </>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  padding-bottom: 6rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  button {
    padding: 1rem 3rem;
    background: #222;
    border: none;
    border: 1px solid #efefef;
    color: #efefef;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.1s;
    &:hover {
      background: #333;
    }
  }
`;

export default Games;
