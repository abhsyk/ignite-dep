import { AnimatePresence, motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import styled from 'styled-components';

const variants = {
  initial: { y: '.5rem', opacity: 0 },
  animate: {
    y: '0rem',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // the scroll event fires when the document view has been scrolled
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <StyledButton
          onClick={scrollToTop}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <BsArrowUpShort />
        </StyledButton>
      )}
    </AnimatePresence>
  );
};

const StyledButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #efefef;
  font-size: 3rem;
  color: #efefef;
  border-radius: 2px;
`;

export default memo(ScrollToTop);
