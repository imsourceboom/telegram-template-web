import React from 'react';
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
  console.log(response);
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
