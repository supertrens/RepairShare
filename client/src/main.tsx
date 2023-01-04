import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import { client } from "./graphql/apolloClient";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
