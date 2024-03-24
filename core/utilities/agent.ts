import crypto from "crypto-js";

const CRYPTO_KEY = process.env.CRYPTO_KEY ?? "CRYPTO_KEY";

const agent = {
  encrypt: (data: unknown) => {
    return crypto.AES.encrypt(JSON.stringify(data), CRYPTO_KEY).toString();
  },
  decrypt: (data: string) => {
    const bytes = crypto.AES.decrypt(data, CRYPTO_KEY);
    return JSON.parse(bytes.toString(crypto.enc.Utf8));
  },
};

export default agent;
