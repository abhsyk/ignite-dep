import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: darkgrey;
    }
    &::-webkit-scrollbar-track {
    background: white;
    }

  }
  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background: #222;
  }
  h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #efefef;
  }
  h3 {
    font-size: 1.3rem;
    color: #efefef;
    padding: 1.5rem 0;
  }
  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #bcbcbc;
  }
  a {
    text-decoration: none;
    color: #efefef;
  }
  img {
    display: block;
  }

  @keyframes circles {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
