import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="th">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="ระบบนี้เป็นระบบสำหรับดาวน์โหลดตารางเรียนที่ทาง กช. จัดทำขึ้น ไม่ได้มีความเกี่ยวข้องกับทางโรงเรียนแต่อย่างใด"
          />
          <meta name="keywords" content="เตรียมอุดมศึกษา, กช., ตารางเรียน, ตารางสอน, กช. เตรียมอุดม" />
          <meta name="author" content="คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://schedule.tucm.cc" />
          <meta property="og:title" content="ระบบจัดตารางเรียน 2/2021" />
          <meta
            property="og:description"
            content="ระบบนี้เป็นระบบสำหรับดาวน์โหลดตารางเรียนที่ทาง กช. จัดทำขึ้น ไม่ได้มีความเกี่ยวข้องกับทางโรงเรียนแต่อย่างใด"
          />
          <meta property="og:image" content="/preview.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://schedule.tucm.cc" />
          <meta property="twitter:title" content="ระบบจัดตารางเรียน 2/2021" />
          <meta
            property="twitter:description"
            content="ระบบนี้เป็นระบบสำหรับดาวน์โหลดตารางเรียนที่ทาง กช. จัดทำขึ้น ไม่ได้มีความเกี่ยวข้องกับทางโรงเรียนแต่อย่างใด"
          />
          <meta property="twitter:image" content="/preview.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
