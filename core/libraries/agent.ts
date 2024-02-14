import crypto from "crypto-js";

const KEY = process.env.CRYPTO_KEY;

const agent = {
  encrypt: (data: unknown) => {
    return crypto.AES.encrypt(JSON.stringify(data), KEY).toString();
  },
  decrypt: (data: any) => {
    const bytes = crypto.AES.decrypt(data, KEY);
    return JSON.parse(bytes.toString(crypto.enc.Utf8));
  },
};

export default agent;
