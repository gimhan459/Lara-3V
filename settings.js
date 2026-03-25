const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94779062397' : process.env.OWNER_NUMBER, /+94721331332
    SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID, /𝕃𝔸ℝ𝔸-𝕄𝔻=qFx3AJIS#4nLikhMVIvMlcPnww7o47iT05w_rj4TsCjAMNEiXWKQ
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? '' : process.env.GITHUB_USER_NAME, /gimhan459
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '' : process.env.GITHUB_AUTH_TOKEN /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,  example - G5OxxdvEbiBPWxm4A0xypQGlyCr4FS267ifz
};

/*
LARA MD BOT DEVELOPED BY SADEESHA

(\ (\,,/)        /),,/)
(-•(    )       (•_•  )
(> ( '  )       ( 💔 )/
  U u  u         U  U
*/
