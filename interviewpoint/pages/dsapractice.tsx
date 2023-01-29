import DsaItem from "../component/Dsaitem";
import Navbar from "../component/navbar";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import dsaPage from "../AllCss/DsaPractice.module.css";
import Footer from "../component/Footer";
type data = {
  messg: [];
  OK: String;
};

interface WithKeyProps {
  key: React.Key;
}

type Item = {
  _id: string;

  Topic: string;
  Name: string;
  difficuly: string;
  Link: string;
  datas: data;
  messg: [];
};

const DsaPractice = ({ datas }: Item) => {
  const data: [] = datas.messg || [];
  // console.log(datas);
  return (
    <Box>
      <Navbar />
      <div className={dsaPage.Main}>
        <div>
          <h1 className={dsaPage.qT}>
            Proficiency in the practices of Data structures and algorithms is
            the key to ace any coding test/interview but what matters the most
            the way one learns Data structures. An efficient learning approach
            combined with consistency will help you master DSA in no time.
          </h1>
          <h1 className={dsaPage.qTB}>
            We are providing 70+ DSA question to practice from all topic's
          </h1>
        </div>
        <img
          src="https://miro.medium.com/max/1400/1*2rKGJ6h1regwmfMcty3SLw.png"
          alt="dsaImg"
        />
      </div>
      <div className={dsaPage.qEs}>QUESTION'S</div>
      {data.map((el: Item) => (
        <DsaItem {...el} key={el._id} />
      ))}
      <Footer />
    </Box>
  );
};

export async function getStaticProps() {
  let data = await fetch("http://localhost:3000/api");

  data = await data.json();
  return {
    props: { datas: data },
  };
}

export default DsaPractice;
