module.exports = ({background, color}) => (
  <div>
    <style global jsx>{`
      @font-face {
      	font-family: 'Dia';
      	src: url('https://s3.amazonaws.com/thecouch/Dia-Regular.woff') format('woff');
      	font-weight: 400;
      	font-style: normal;
      }

      @font-face {
      	font-family: 'Dia';
      	src: url('https://s3.amazonaws.com/thecouch/Dia-Bold.woff') format('woff');
      	font-weight: 600;
      }
      @font-face {
      	font-family: 'Dia';
      	src: url('https://s3.amazonaws.com/thecouch/Dia-Black.woff') format('woff');
      	font-weight: 800;
      }

      * {
        box-sizing: border-box;
      }
      body, html {
        font-family: 'Dia', monospace;
        padding: 0;
        margin: 0;
      }
      .border {
        position: fixed;
        z-index: 1000000000;
        width: 100%;
        background: black;
        height: 5px;
        left: 0;
        top: 0;
      }
      .border:after {
        content: '';
        position: fixed;
        bottom: 0;
        left: 0;
        height: 5px;
        width: 100%;
        background: black;
        z-index: 10000000;
      }
      .layout {
        position: relative;
        z-index: 4;
      }
      h1 {
        font-family: 'Dia', sans-serif;
        font-weight: 800;
        font-size: 20px;
        line-height: 1;
        margin: 14px 0 28px;
      }
      h2, h2 a {
        color: black;
        font-size: 24px;
        font-family: 'Dia', sans-serif;
        font-weight: 800;
      }
      @media (min-width: 45rem) {
        h1 {
          font-size: 24px;
          letter-spacing: 1px;
        }
        h2 a, h2 {
          font-size: 38px;
        }
      }
      @media (min-width: 55rem) {
        h2 a, h2 {
          font-size: 42px;
        }
      }
      .ar {
        text-align: right;
      }
      .fit-a {
        top: 0; left: 0; bottom: 0; right: 0;
      }
      .fw {
        flex-wrap: wrap;
      }
      fill-x {
        width: 100%;
      }
      fill-a {
        height: 100%;
        width: 100%;
      }
      .px2 {
        padding: 2rem;
      }
      .pt2 {
        padding-top: 2rem;
      }
      .px1 {
        padding: 1rem;
      }
      .px0 {
        padding: 0;
      }
      .mx0 {
        margin: 0;
      }
      .abs {
        position: absolute;
      }
      .f {
        display: flex;
      }
      .caps {
        text-transform: uppercase;
      }
      .jce {
        justify-content: flex-end;
      }
      .jcs {
        justify-content: flex-start;
      }
      .jcc {
        justify-content: center;
      }
      .aie {
        align-items: flex-end;
      }
      .aic {
        align-items: center;
      }
      .mha {
        margin: 0 auto;
      }
      svg {
        width: calc(100vw - 4rem);
        height: calc((100vw - 4rem) / 3.2);
      }
      .z1 {
        z-index: 10;
      }
      a {
        text-decoration: none;
      }
      a:hover {

      }
      p, a {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.15;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 1px 0;
      }

      p.small a, p.small {
        font-size: 13px;
      }
      @media (min-width: 30em) {
        p.small, p.small a {
          font-size: 18px;
        }
      }
      `}</style>
  </div>
)
