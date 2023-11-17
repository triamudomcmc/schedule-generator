import NextDocument, { DocumentContext, Html,Head, Main, NextScript } from "next/document"
import React from "react"

class MyDoc extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="th">
        <Head>
          <meta charSet="utf-8"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap"
              rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico"/>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CFN0JZ8EVW"></script>
          <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CFN0JZ8EVW', {
              page_path: window.location.pathname,
            });
          `,
              }}
          />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDoc
