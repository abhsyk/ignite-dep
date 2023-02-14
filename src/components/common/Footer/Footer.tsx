import { memo } from 'react';
import styled from 'styled-components';
import { Logo } from '../../common';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <Logo />
        <p>&copy; {new Date().getFullYear()} Ignite</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  border-top: 1px solid #fff;
  margin: 0 5rem;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

export default memo(Footer);
