import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const ORIGIN = "https://hoshitaro-creative.github.io";

const App = ({ Component, pageProps }: AppProps) => (
  <Auth0Provider
    domain="dev-9p92y60n.us.auth0.com"
    clientId="VLBo0wHnyPj5s6OaB17JkyTAqLNgmwS4"
    redirectUri={`${ORIGIN}/character-counter/app`}
    audience="https://mbnr69t3i6.execute-api.ap-northeast-1.amazonaws.com/"
  >
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </Auth0Provider>
);

export default App;
