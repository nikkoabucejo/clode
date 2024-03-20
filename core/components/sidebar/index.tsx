import type { User as TUser } from "@prisma/client";

import Space from "@components/space";
import React from "react";
import User from "@components/user";
import Snippets from "@components/snippets";
import Snippet from "@components/snippets/snippet";

const Sidebar = async () => {
  return (
    <aside className="glass grid h-full w-[280px]  grid-rows-[auto,1fr,auto]  gap-6 border-r px-8 py-6">
      <Space />
      <section>
        <Snippets title="Favorites">
          {snippets.map((snippet) => (
            <Snippet key={snippet} fileName={snippet} />
          ))}
        </Snippets>
        <Snippets title="My Collection">
          {snippets.map((snippet) => (
            <Snippet key={snippet} fileName={snippet} />
          ))}
        </Snippets>
        <Snippets title="Files" hasFolderIcon={false}>
          {snippets.map((snippet) => (
            <Snippet key={snippet} fileName={snippet} />
          ))}
        </Snippets>
      </section>
      <User user={user} />
    </aside>
  );
};

export default Sidebar;

const user: TUser = {
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@gmail.com",
  image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  id: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  role: "USER",
  emailVerified: new Date(),
};

const snippets = ["useState", "useEffect", "useRef", "bubbleSort", "quickSort"];
