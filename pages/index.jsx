import Login from 'components/Login';
import Axios from 'axios';

const cookieTest = () => {
  Axios.get('/', { withCredentials: true });
};

const Home = () => {
  return (
    <>
      <h1>Test!!!</h1>
      <Login />
      <button type="button" onClick={() => cookieTest}>
        버튼
      </button>
    </>
  );
};

export default Home;
