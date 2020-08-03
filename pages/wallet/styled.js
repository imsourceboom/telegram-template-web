import styled from 'styled-components';

export const Container = styled.section`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 70px;
`;

export const Top = styled.div`
  position: relative;
  width: 96%;
  height: 250px;
  margin: 0 auto 20px;
  padding: 20px 20px;
  border-radius: 0 0 8px 8px;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.1);

  .wrapper {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      a.logo {
        img {
          width: 70px;
          height: 27.72px;
          margin-bottom: -7px;

          @media (min-width: 768px) {
            width: 80px;
            height: 31.69px;
          }
        }
      }

      figure.profile {
        display: flex;
        align-items: center;
        color: #0088cc;
        font-size: 13px;

        @media (min-width: 768px) {
          font-size: 14px;
        }

        img {
          width: 22px;
          height: 22px;
          margin-right: 3px;

          @media (min-width: 768px) {
            width: 24px;
            height: 24px;
            margin-right: 4px;
          }
        }

        figcaption {
          margin-top: -1px;
        }
      }
    }

    dl {
      &.gram {
        dt {
          font-size: 18px;
          margin-bottom: 3px;
          margin-left: 2px;
          font-weight: bold;

          &::after {
            content: '•Uninit';
            font-size: 13px;
            color: gray;
            font-weight: normal;
            padding-left: 10px;
          }

          &.active {
            &::after {
              content: '•Active';
              font-size: 13px;
              color: rgb(11, 172, 11);
              font-weight: normal;
              padding-left: 10px;
            }
          }
        }

        dd {
          font-size: 33px;
          font-weight: 400;
          font-family: 'Spoqa Han KR', sans-serif;
        }
      }
    }

    .receive {
      width: 100%;
      opacity: 0.5;
      font-size: 13px;

      @media (min-width: 768px) {
        font-size: 14px;
      }

      p {
        margin-bottom: 5px;
      }

      .box {
        display: flex;
        align-items: center;

        #address {
          width: 94%;
          word-break: break-all;
          padding-right: 10px;
        }

        .copy-icon {
          flex: 1;
          position: relative;
          cursor: pointer;

          img {
            margin: 0 auto;
          }

          &.modal {
            &::before {
              content: 'Copied !';
              position: absolute;
              top: 0;
              left: 50%;
              transform: translate(-50%, -115%);
              display: flex;
              justify-content: center;
              align-items: center;
              width: 60px;
              height: 23px;
              font-size: 13px;
              border-radius: 4px;
              background-color: rgb(0, 15, 15);
              color: white;
            }
          }
        }
      }
    }
  }
`;

export const Tab = styled.ul`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 10px;
  }

  li {
    width: 120px;
    height: 36px;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.22);
    border-radius: 4px;
    color: white;
    cursor: pointer;

    &.withdraw-btn {
      background-color: lightcoral;
    }

    &.staking-btn {
      background-color: rgb(106, 190, 241);
    }

    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export const List = styled.ul`
  width: 96%;
  margin: 0 auto;

  li {
    position: relative;
    padding: 30px 10px;

    @media (min-width: 768px) {
      padding: 30px 20px;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 220px;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.1);
    }

    &:last-child {
      &::before {
        content: '';
        display: none;
      }
    }

    &.deposit-card {
      dl {
        &:first-child {
          dt {
            color: lightseagreen;
          }
        }
      }
    }
    &.withdraw-card {
      dl {
        &:first-child {
          dt {
            color: lightsalmon;
          }
        }
      }
    }

    dl {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      &:first-child {
        align-items: center;

        dt {
          font-size: 15px;

          @media (min-width: 768px) {
            font-size: 16px;
          }
        }

        dd {
          opacity: 1;
          font-size: 1em;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      dt {
        min-width: 40px;
        margin-right: 16px;
        color: #484d55;
      }

      dd {
        word-break: break-all;
        text-align: right;
        font-size: 0.95em;
        opacity: 0.5;
      }
    }
  }
`;

export const MoreButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 360px;
  height: 43px;
  background-color: rgba(247, 247, 247, 1);
  border: 0;
  border-radius: 2px;
  margin: 30px auto 0;

  &::after {
    content: '';
    width: 15px;
    height: 15px;
    opacity: 0.5;
    background-image: url('/favicons/chevron-down.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
