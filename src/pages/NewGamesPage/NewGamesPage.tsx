import { useEffect } from 'react';
import { Layout } from '../../components/layout';
import { Games } from '../../components/game';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const NewPage: React.FC = () => {
  const { fetchGames } = useAction();
  const { newGames } = useTypedSelector((state) => state.games);

  /* Load the items */
  useEffect(() => {
    fetchGames('newGames', newGames.page);
  }, [newGames.page]);

  return (
    <Layout>
      <Games fetchGamesData={newGames} title="New Games" option="newGames" />
    </Layout>
  );
};

export default NewPage;
