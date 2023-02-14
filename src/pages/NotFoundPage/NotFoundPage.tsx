import styled from 'styled-components';

// -> App

const NotFound: React.FC = () => {
  return (
    <StyledNotFound>
      <h1>Oops! Page Not Found</h1>
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    color: #efefef;
  }
`;

export default NotFound;
