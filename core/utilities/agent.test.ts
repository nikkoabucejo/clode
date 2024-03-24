import { describe, it, expect } from "vitest";
import agent from "./agent";

describe("agent", () => {
  it("should correctly encrypt and decrypt a string", () => {
    const originalData = "CLODE is the best!";
    const encryptedData = agent.encrypt(originalData);
    const decryptedData = agent.decrypt(encryptedData);
    console.log("original data:", originalData);
    console.log("encrypted data:", encryptedData);
    console.log("decrypted data:", decryptedData);

    expect(decryptedData).toEqual(originalData);
  });

  it("should correctly encrypt and decrypt a number", () => {
    const originalData = 1000;
    const encryptedData = agent.encrypt(originalData);
    const decryptedData = agent.decrypt(encryptedData);
    console.log("original data:", originalData);
    console.log("encrypted data:", encryptedData);
    console.log("decrypted data:", decryptedData);

    expect(decryptedData).toEqual(originalData);
  });

  it("should correctly encrypt and decrypt a boolean", () => {
    const originalData = true;
    const encryptedData = agent.encrypt(originalData);
    const decryptedData = agent.decrypt(encryptedData);
    console.log("original data:", originalData);
    console.log("encrypted data:", encryptedData);
    console.log("decrypted data:", decryptedData);

    expect(decryptedData).toEqual(originalData);
  });

  it("should correctly encrypt and decrypt an object", () => {
    const originalData = { name: "CLODE", age: 20 };
    const encryptedData = agent.encrypt(originalData);
    const decryptedData = agent.decrypt(encryptedData);
    console.log("original data:", originalData);
    console.log("encrypted data:", encryptedData);
    console.log("decrypted data:", decryptedData);

    expect(decryptedData).toEqual(originalData);
  });

  it("should correctly encrypt and decrypt an array", () => {
    const originalData = ["CLODE", "20"];
    const encryptedData = agent.encrypt(originalData);
    const decryptedData = agent.decrypt(encryptedData);
    console.log("original data:", originalData);
    console.log("encrypted data:", encryptedData);
    console.log("decrypted data:", decryptedData);

    expect(decryptedData).toEqual(originalData);
  });
});
