import { memo, useCallback } from 'react';
import {
  SiXbox,
  SiApple,
  SiLinux,
  SiAndroid,
  SiWindows,
  SiPlaystation,
  SiNintendoswitch,
} from 'react-icons/si';
import { IoGameControllerOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GameType } from '../../../util/types';

type Props = {
  platforms: GameType['platforms'];
};

const Platforms: React.FC<Props> = ({ platforms }) => {
  // Get Platform
  const getPlatform = useCallback((platform: string) => {
    if (platform.includes('Xbox')) return <SiXbox />;
    if (platform.includes('PlayStation')) return <SiPlaystation />;

    switch (platform) {
      case 'PC':
        return <SiWindows />;
      case 'Nintendo Switch':
        return <SiNintendoswitch />;
      case 'iOS':
        return <SiApple />;
      case 'Linux':
        return <SiLinux />;
      case 'Android':
        return <SiAndroid />;
      default:
        return <IoGameControllerOutline />;
    }
  }, []);

  return (
    <>
      <h3>Platforms</h3>
      <StyledPlatforms>
        {platforms.map((data) => (
          <div key={data.platform.id}>
            {getPlatform(data.platform.name)}
            <span>{data.platform.name}</span>
          </div>
        ))}
      </StyledPlatforms>
    </>
  );
};

// Styles
const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1.5rem;
  }
  svg {
    height: 4rem;
    width: 4rem;
  }
  span {
    margin-top: 0.5rem;
  }

  @media (max-width: 1024px) {
    justify-content: unset;
    div {
      flex-wrap: wrap;
      margin: 0;
      margin-right: 1rem;
    }
    svg {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;

export default memo(Platforms);
