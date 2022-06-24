import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4sri3va2i1k01z3fqlp09lf/master",
  cache: new InMemoryCache(),
});
