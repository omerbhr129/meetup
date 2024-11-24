import React from 'react';
import '../styles/globals.css'; // ודא שקובץ הסגנונות קיים

function MyApp({ Component, pageProps }: { Component: React.ElementType; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
