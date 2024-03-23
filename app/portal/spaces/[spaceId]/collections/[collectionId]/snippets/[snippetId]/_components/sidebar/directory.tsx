import Folder from "./folder";
import type api from "@libraries/api";

type Props = {
  collections: Awaited<ReturnType<typeof api.server.get.collections>>;
};

const Directory = ({ collections }: Props) => {
  return collections.map((collection) => (
    <div key={collection.id} className="space-y-2">
      <Folder
        key={collection.id}
        name={collection.name}
        collection={collection}
      />
    </div>
  ));
};

export default Directory;
