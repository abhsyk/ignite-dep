import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../../components/layout';
import { Games } from '../../components/game';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { fetchGames, setSearchWord } = useAction();
  const params = Object.fromEntries([...searchParams]);
  const { searched } = useTypedSelector((state) => state.games);

  /* Fetch the games when the number of pages changes  */
  useEffect(() => {
    if (searched.page !== 1) {
      fetchGames('searched', searched.page, params.q);
    }
  }, [searched.page]);

  /* Searching from url */
  useEffect(() => {
    // Set search word to state
    setSearchWord(params.q);
    // Fetch games on first load
    fetchGames('searched', searched.page, params.q);
  }, []);

  return (
    <Layout>
      <Games
        fetchGamesData={searched}
        title="Searched Games"
        option="searched"
      />
    </Layout>
  );
};

export default SearchPage;
