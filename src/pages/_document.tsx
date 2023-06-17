import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || 'en' };
  }

  render() {
    return (
      <Html dir={this.props.locale === 'fa' ? 'rtl' : 'ltr'} lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
