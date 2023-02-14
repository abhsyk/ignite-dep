import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from '../../components/layout';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// -> App

const Home: React.FC = () => {
  const { fetchGames } = useAction();
  const { popular } = useTypedSelector((state) => state.games);

  useEffect(() => {
    fetchGames('popular', popular.page);
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Carousel
          showArrows={true}
          autoPlay
          infiniteLoop={true}
          className="carousel-container"
        >
          {popular.games.slice(0, 5).map((game) => (
            <StyledImage key={game.id}>
              <Link to={`/game/${game.slug}`}>
                <div className="content">
                  <h1>{game.name}</h1>
                  <img src={game.background_image} alt={game.name} />
                </div>
              </Link>
            </StyledImage>
          ))}
        </Carousel>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  margin-top: 5rem;

  @media (max-width: 1024px) {
    margin: 5rem -5rem;
    .carousel-container {
      max-width: 100%;
    }
  }
`;

const StyledImage = styled.div`
  .content {
    position: relative;
  }
  h1 {
    padding: 0.5rem 2rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background: rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export default Home;
