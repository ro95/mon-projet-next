import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import CssBaseline from "@mui/material/CssBaseline";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
