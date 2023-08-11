"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderComponent from "@/app/projects/calculator/components/HeaderComponent";
import Calculator from "@/app/projects/calculator/components/Calculator";
import styles from "../calculator/styles/styles.css";
import Head from "next/head";

const Page = () => {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href={styles}
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
      </Head>
      <HeaderComponent />
      <Calculator />
    </div>
  );
};

export default Page;
