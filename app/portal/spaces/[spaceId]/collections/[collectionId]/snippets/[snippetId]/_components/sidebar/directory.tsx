import Folder from "./folder";
import type api from "@core/libraries/api";

type Props = {
  collections: Awaited<ReturnType<typeof api.server.get.collections>>;
};

const Directory = ({ collections }: Props) => {
  
  const sortedCollections = collections.toSorted((a: typeof collections[0], b: typeof collections[0]) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  return sortedCollections.map((collection) => (
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
