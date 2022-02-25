import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Layout from "../../components/layout/layout";
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
