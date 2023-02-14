import { useEffect } from 'react';
import { Layout } from '../../components/layout';
import { Games } from '../../components/game';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const UpcomingPage: React.FC = () => {
  const { fetchGames } = useAction();
  const { upcoming } = useTypedSelector((state) => state.games);

  /* Load the items */
  useEffect(() => {
    fetchGames('upcoming', upcoming.page);
  }, [upcoming.page]);

  return (
    <Layout>
      <Games
        fetchGamesData={upcoming}
        title="Upcoming Games"
        option="upcoming"
      />
    </Layout>
  );
};

export default UpcomingPage;
