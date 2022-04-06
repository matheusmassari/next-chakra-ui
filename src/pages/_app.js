import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Layout from "../components/Layout/Layout";
import "@fontsource/montserrat";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
