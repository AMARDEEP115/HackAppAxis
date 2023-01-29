// import Head from "next/head";
// import Image from "next/image";
// import React from "react";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "../component/navbar";
const inter = Inter({ subsets: ["latin"] });
import homeStyle from "../AllCss/Home.module.css";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className={homeStyle.homeBody}>
      <Navbar />
      <div>
        <div className={homeStyle.qtAimg}>
          <div>
            <h1 className={homeStyle.quote}>
              Unfortunately, there seems to be far more opportunity out there
              than ability.... We should remember that good fortune often
              happens when opportunity meets with preparation.
            </h1>
            <h1 className={homeStyle.qtWiter}>-Thomas A. Edison</h1>
          </div>
          <img
            className={homeStyle.homeImage}
            src="data:image/jpeg;base64,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"
            alt="interview logo"
          />
        </div>
        <Link href="/about">
          <button className={homeStyle.sLbtn}>Know More</button>
        </Link>
        <div className={homeStyle.lineS}>
          <h1>
            Comprehensive learning programs& classes for all MERN Develpoers
          </h1>
          <h1>
            Become lifelong learners with India's best video tutorils, DSA
            practice and personalised learning journeys
          </h1>
        </div>
        <div className={homeStyle.DsaCod}>
          <Link href="/dsapractice">
            <img
              className={homeStyle.DsaCodIA}
              src="https://repository-images.githubusercontent.com/314743882/25eb0c00-85e8-11eb-8b28-0b22e841e961"
              alt="dsa"
            />
          </Link>
          <Link href="/tutorial">
            <img
              className={homeStyle.DsaCodIB}
              src="https://contentstatic.techgig.com/photo/78956714/Top-10-websites-to-learn-programming-in-2020.jpg"
              alt="coding"
            />
          </Link>
        </div>
        <Footer />
      </div>
      <button className={homeStyle.pageExtender}></button>
    </div>
  );
}
