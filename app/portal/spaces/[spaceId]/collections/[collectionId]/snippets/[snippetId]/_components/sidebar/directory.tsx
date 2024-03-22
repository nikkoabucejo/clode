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
        title={collection.name}
        snippets={snippets}
        count={collection._count.snippets}
      />
    </div>
  ));
};

export default Directory;

export const snippets = [
  { title: "useState", id: "1", language: "JavaScript" },
  { title: "useEffect", id: "2", language: "JavaScript" },
  { title: "useRef", id: "3", language: "TypeScript" },
  { title: "bubbleSort", id: "4", language: "Python" },
  { title: "quickSort", id: "5", language: "Python" },
];
