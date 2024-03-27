import type server from "@core/libraries/api/server";
import type client from "@core/libraries/api/client";

type API = {
  server: typeof server.server;
  client: typeof client.client;
}

export default API
