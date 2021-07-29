import React from "react";
import App from "next/app";
import { ClientContext } from "graphql-hooks";
import { ThemeProvider, Styled } from "theme-ui";

import withGraphQLClient from "../lib/with-graphql-client";

import GlobalStyles from "../styles/global";

import theme from "../theme";

class MyApp extends App {
  render() {
    const { Component, pageProps, graphQLClient } = this.props;
    return (
      <ClientContext.Provider value={graphQLClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Styled.root>
            <Component {...pageProps} />
          </Styled.root>
        </ThemeProvider>
      </ClientContext.Provider>
    );
  }
}

export default withGraphQLClient(MyApp);
