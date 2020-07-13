import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import axios from 'axios';

const handleTelegramResponse = async response => {
  console.log(response);
  const data = await response;
  return axios.post('http://localhost:8008/user/login', data, { credentials: true });
};

export default () => {
  return (
    <section>
      <div>
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="examTemplateBot"
        />
      </div>
    </section>
  );
};
