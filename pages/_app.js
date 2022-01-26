import "antd/dist/antd.css";
import "../styles/global.css";

import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Dongle:wght@400");
          @import
          url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@800&display=swap");
          @import
          url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
          @import
          url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap");
        </style>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
