import Link from 'next/link';

import { Nav } from './styled';

const ProfileANDWallet = () => {
  return (
    <Nav>
      <figure>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/600px-Telegram_logo.svg.png"
          alt="텔레그램 아이콘"
        />
        <figcaption>UserName</figcaption>
      </figure>
      <Link href="/wallet">
        <a className="wallet">Wallet</a>
      </Link>
    </Nav>
  );
};

export default ProfileANDWallet;
