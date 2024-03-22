type Children = React.ReactNode;

type Page<TProps = unknown> = React.FC<Readonly<TProps>>;

type Layout<TProps = unknown> = React.FC<
  Readonly<
    TProps & {
      children: Children;
    }
  >
>;

type Params = {
  spaceId: string;
  collectionId: string;
  snippetId: string;
};
