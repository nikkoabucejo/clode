type Children = React.ReactNode;

type Page<TProps = {}> = React.FC<Readonly<TProps>>;

type Layout<TProps = {}> = React.FC<
  Readonly<
    TProps & {
      children: Children;
    }
  >
>;
