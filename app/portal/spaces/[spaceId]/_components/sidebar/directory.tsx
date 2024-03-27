import API from "@core/types/api";
import Folder from "./folder";
import Creators from "./creators";

type Props = {
  collections: Awaited<ReturnType<API["server"]["get"]["collections"]>>;
};

const Directory = ({ collections }: Props) => {
  const sortedCollections = collections.toSorted((a, b) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  return (
    <div>
      <Creators />
      {sortedCollections.map((collection) => (
        <div key={collection.id} className="space-y-2">
          <Folder
            key={collection.id}
            name={collection.name}
            collection={collection}
          />
        </div>
      ))}
    </div>
  );
};

export default Directory;
