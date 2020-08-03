import styled from 'styled-components';

export const Container = styled.section``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  height: 60px;
  margin: 0 auto;
  padding: 0 12px;
  border: 1px solid red;

  figure.logo {
    img {
      width: 80px;
    }
  }
`;
