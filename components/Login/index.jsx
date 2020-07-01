import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import axios from 'axios';

const handleTelegramResponse = response => {
  console.log(response);
  return axios.post('http://localhost:8008/', response);
};

export default () => {
  return (
    <section>
      <div>
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="examTemplateBot"
        />
        {handleTelegramResponse()}
      </div>
    </section>
  );
};
