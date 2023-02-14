import { motion } from 'framer-motion';
import { memo } from 'react';
import styled from 'styled-components';

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerStyle>
      <Circles>
        {new Array(8).fill('').map((_, index) => (
          <Circle key={index + 1} />
        ))}
      </Circles>
    </SpinnerStyle>
  );
};

const SpinnerStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
  z-index: 300;
`;

const Circles = styled(motion.div)`
  width: 8rem;
  height: 8rem;
  position: relative;
`;

const Circle = styled(motion.div)`
  animation: circles 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 4rem 4rem;
  &::after {
    content: '';
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: #efefef;
    margin: -0.4rem 0 0 -0.4rem;
  }
  &:nth-child(1) {
    animation-delay: -0.036s;
    &::after {
      top: 6.3rem;
      left: 6.3rem;
    }
  }
  &:nth-child(2) {
    animation-delay: -0.072s;
    &::after {
      top: 6.8rem;
      left: 5.6rem;
    }
  }
  &:nth-child(3) {
    animation-delay: -0.108s;
    &::after {
      top: 7.1rem;
      left: 4.8rem;
    }
  }
  &:nth-child(4) {
    animation-delay: -0.144s;
    &::after {
      top: 7.2rem;
      left: 4rem;
    }
  }
  &:nth-child(5) {
    animation-delay: -0.18s;
    &::after {
      top: 7.1rem;
      left: 3.2rem;
    }
  }
  &:nth-child(6) {
    animation-delay: -0.216s;
    &::after {
      top: 6.8rem;
      left: 2.4rem;
    }
  }
  &:nth-child(7) {
    animation-delay: -0.252s;
    &::after {
      top: 6.3rem;
      left: 1.7rem;
    }
  }
  &:nth-child(8) {
    animation-delay: -0.288s;
    &::after {
      top: 5.6rem;
      left: 1.2rem;
    }
  }
`;

export default memo(LoadingSpinner);
