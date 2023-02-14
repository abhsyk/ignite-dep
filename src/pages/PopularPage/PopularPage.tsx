import { useEffect } from 'react';
import { Layout } from '../../components/layout';
import { Games } from '../../components/game';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const PopularPage: React.FC = () => {
  const { fetchGames } = useAction();
  const { popular } = useTypedSelector((state) => state.games);

  /* Load the items */
  useEffect(() => {
    fetchGames('popular', popular.page);
  }, [popular.page]);

  return (
    <Layout>
      <Games fetchGamesData={popular} title="Popular Games" option="popular" />
    </Layout>
  );
};

export default PopularPage;
