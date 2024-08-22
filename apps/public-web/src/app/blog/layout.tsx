import { ApolloWrapper } from '../../ComponentFactory/ApolloWrapper';

export default function Layout({ children }: React.PropsWithChildren) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
