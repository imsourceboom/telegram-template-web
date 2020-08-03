import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import TelegramLogin from 'components/Login';
import ProfileANDWallet from 'components/ProfileANDWallet';

import { Container, Header } from './styled';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Container>
        <Header>
          <figure className="logo">
            <img src="/firston.svg" alt="" />
          </figure>
          {isLoggedIn ? <ProfileANDWallet /> : <TelegramLogin />}
        </Header>
        <Link href="/wallet">
          <a>지갑으로 이동</a>
        </Link>
      </Container>
    </>
  );
};

export default Home;
