"use client";

import api from "@core/libraries/api/client";

const Client = () => {
  const handler = async () => {
    await api.client.create.snippet({
      name: "Hello, World!",
      code: "console.log('Hello, World!');",
      description: "A simple hello world snippet",
      language: "javascript",
      collection: {
        connect: {
          id: "ckr4j5v8k0000b9k8j6b4v7v7",
        },
      },
    });
  };
  return <div className="text-black">Client</div>;
};

export default Client;
