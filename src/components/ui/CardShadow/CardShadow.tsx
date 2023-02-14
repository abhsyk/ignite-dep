import { motion } from 'framer-motion';
import { memo, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  loading?: boolean;
};

const CardShadow: React.FC<PropsWithChildren<Props>> = ({
  children,
  loading = true,
}) => {
  const navigate = useNavigate();

  return (
    <StyledCardShadow onClick={() => navigate(-1)}>
      {!loading && <div className="cross" />}
      {children}
    </StyledCardShadow>
  );
};

// Styles
const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  .cross {
    cursor: pointer;
  }
  .cross::after {
    content: '';
    width: 5rem;
    height: 1px;
    background-color: #fff;
    position: fixed;
    left: 7rem;
    top: 7rem;
    z-index: 20;
    transform: rotate(45deg);

    @media (max-width: 1024px) {
      left: 3rem;
      top: 5rem;
    }
  }

  .cross::before {
    content: '';
    width: 5rem;
    height: 1px;
    background-color: #fff;
    position: fixed;
    left: 7rem;
    top: 7rem;
    z-index: 20;
    transform: rotate(-45deg);

    @media (max-width: 1024px) {
      left: 3rem;
      top: 5rem;
    }
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

export default memo(CardShadow);
