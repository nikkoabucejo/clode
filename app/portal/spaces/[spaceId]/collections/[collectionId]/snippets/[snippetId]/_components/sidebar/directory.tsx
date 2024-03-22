import Collection from "./collection";
import type api from "@libraries/api";

type Props = {
  collections: Awaited<ReturnType<typeof api.server.get.collections>>;
};

const Directory = ({ collections }: Props) => {
  return collections.map((collection) => (
    <div className="space-y-2">
      <Collection
        key={collection.id}
        name={collection.name}
        snippets={snippets}
        count={collection._count.snippets}
      />
    </div>
  ));
};

export default Directory;

export const snippets = [
  { name: "useState", id: "1", language: "JavaScript" },
  { name: "useEffect", id: "2", language: "JavaScript" },
  { name: "useRef", id: "3", language: "TypeScript" },
  { name: "bubbleSort", id: "4", language: "Python" },
  { name: "quickSort", id: "5", language: "Python" },
];
