import React, { Fragment } from "react";
import Footer from "./footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <Fragment>
       <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/netflix_logo_icon_170919 (1).ico" />
      </Head>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
