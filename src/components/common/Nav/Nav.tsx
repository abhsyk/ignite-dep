import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useAction } from '../../../hooks/useAction';
import { FormEvent, memo, useCallback } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { fadeIn } from '../../../styles/GlobalStyles';
import { Logo } from '..';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Nav: React.FC = () => {
  const navigate = useNavigate();
  const { searchWord } = useTypedSelector((state) => state.games);
  const { setSearchWord, clearSearched, fetchGames } = useAction();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (searchWord.trim().length !== 0) {
        // Clear the Searched state
        clearSearched();
        // Go to /search page
        navigate(`/search?q=${searchWord}`);
        fetchGames('searched', 1, searchWord);
      }
    },
    [searchWord]
  );

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show" exit="exit">
      <Logo onClick={() => clearSearched()} />
      <form className="search">
        <div className="input-wrapper">
          <input
            type="text"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <div className="clear" onClick={() => setSearchWord('')}>
            <RxCross1 />
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

// Styles
const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  .search {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
  }
  .input-wrapper {
    position: relative;
  }
  .clear {
    position: absolute;
    top: 14px;
    right: 14px;
    color: #666;
    cursor: pointer;
  }
  input {
    display: inline-block;
    width: 30rem;
    font-size: 1.5rem;
    padding: 0.5rem 2rem 0.5rem 1rem;
    border: none;
    font-weight: bold;
    outline: none;
  }
  button {
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: #fff;
  }
`;

export default memo(Nav);
