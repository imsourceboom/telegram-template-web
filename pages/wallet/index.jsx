import Link from 'next/link';
import { Container, Top, Tab, List, MoreButton } from './styled';

const Wallet = () => {
  return (
    <>
      <Container>
        <Top>
          <div className="wrapper">
            <div className="header">
              <Link href="/">
                <a className="logo">
                  <img src="/firstonwallet.svg" alt="Logo" />
                </a>
              </Link>
              <figure className="profile">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/600px-Telegram_logo.svg.png"
                  alt="텔레그램 아이콘"
                />
                <figcaption>UserName</figcaption>
              </figure>
            </div>
            <dl className="gram">
              {/* 지갑이 활성화가 되면 dt 태그에 active 클래스를 붙인다. */}
              <dt className="active">보유수량</dt>
              <dd className="number nano">2345345234523434</dd>
            </dl>
            <div className="receive">
              <p>그램주소</p>
              <div className="box">
                <div id="address">
                  -1:d88335c70d437a2a9201383b1b17c6a88d80416d6d79c244505708dfe179885d
                </div>
                <figure className="copy-icon">
                  <img
                    src="https://icongr.am/clarity/copy.svg?size=22&color=000000"
                    alt="복사"
                  />
                </figure>
              </div>
            </div>
          </div>
        </Top>
        <Tab>
          <li className="withdraw-btn">
            <Link href="/withdraw">
              <a>출금하기</a>
            </Link>
          </li>
          <li className="staking-btn">
            <Link href="staking">
              <a>스테이킹</a>
            </Link>
          </li>
        </Tab>
        <List>
          <li>
            <dl>
              <dt>출금</dt>
              <dd>완료</dd>
            </dl>
            <dl>
              <dt>금액</dt>
              <dd>475839485739983</dd>
            </dl>
            <dl>
              <dt>날짜</dt>
              <dd>2020.06.03 14:36:48</dd>
            </dl>
            <dl>
              <dt>거래ID</dt>
              <dd>cbcf590b806ad3669c7b8d07274897e426391a5504121385f5bc5c349c3a48ba</dd>
            </dl>
          </li>
        </List>
        <MoreButton>더보기</MoreButton>
      </Container>
    </>
  );
};

export default Wallet;
