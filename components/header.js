import Head from 'next/head'
import GlobalStyle from '../styles/global'

export default () => (
  <div>
    <Head>
      <title>Kevin Green - Developer</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content="Spaghetti" />
      <meta name='keywords' content='digital studio, development, graphic design, branding, web development, app development, start ups' />
      <meta name='og:url' content='https://kevingreen.sucks/' />
      <meta name='fragment' content='!' />
      <meta http-equiv='Accept-CH' content='DPR, Width, Viewport-Width' />
      <meta name='og:image' content='https://s3.amazonaws.com/couchnyc/The_Couch.png' />
      <meta property='og:locale' content='en_US' />
      <link rel='shortcut icon' href='/static/favicon.gif' />
      <meta property='og:site_name' content='Kevin Green - Developer' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='Kevin Green - Developer' />
      <meta name='twitter:description' content="Spaghetti" />
      <meta name='twitter:url' content='https://kevingreen.sucks/' />
      <meta name='twitter:image:src' content='https://s3.amazonaws.com/couchnyc/The_Couch.png' />
    </Head>
    <GlobalStyle />
    <style jsx>{`
      .header {
        border-bottom: 5px solid black;
        padding: 18px 20px 16px;
      }
      .header h1 {
        padding: 0;
        margin: 0;
      }
      `}</style>
    <div className='header'>
      <h1 className='caps'>Kevin Green</h1>
    </div>
  </div>
)
