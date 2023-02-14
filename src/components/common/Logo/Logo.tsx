import { motion } from 'framer-motion';
import { memo } from 'react';
import { RiFireFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  onClick?: () => void;
};

const Logo: React.FC<Props> = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <StyledLogo onClick={onClick}>
      <div className="logo-container" onClick={() => navigate('/')}>
        <RiFireFill />
        <h1>Ignite</h1>
      </div>
    </StyledLogo>
  );
};

// Styles
const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  color: #efefef;

  .logo-container {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  svg {
    height: 1.8rem;
    width: 1.8rem;
  }
`;

export default memo(Logo);
