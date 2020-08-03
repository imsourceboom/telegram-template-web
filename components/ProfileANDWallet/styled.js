import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  figure {
    display: flex;
    align-items: center;
    /* color: #0088cc; */
    font-size: 13px;

    @media (min-width: 768px) {
      font-size: 14px;
    }

    img {
      width: 22px;
      height: 22px;
      margin-right: 2px;

      @media (min-width: 768px) {
        width: 24px;
        height: 24px;
        margin-right: 3px;
      }
    }

    figcaption {
      margin-top: -1px;
    }
  }

  a.wallet {
    /* display: block; */
    font-weight: bold;
    color: #0088cc;
    letter-spacing: 0.2em;
    margin-left: 20px;

    @media (min-width: 768px) {
      margin-left: 30px;
    }
  }
`;
