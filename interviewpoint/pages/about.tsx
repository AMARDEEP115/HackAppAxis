import Navbar from "../component/navbar";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import aboutStyle from "../AllCss/About.module.css";
import Footer from "../component/Footer";
import Image from "next/image";

const about = () => {
  return (
    <div className={aboutStyle.Body}>
      <Navbar />
      <div className={aboutStyle.aboutDiv}>
        <h1>
          Our mission is to provide an online learning platform for gaining
          skills and knowledge in coding and DSA through electronic devices like
          computers, mobiles, laptops, etc using the internet. We makes it
          possible for coders to learn all relevant skills more efficiently. The
          people who are not able to learn coding and DSA from basics for them
          our platforms can help them to learn everything from anywhere using
          the internet.
        </h1>
        <img
          className={aboutStyle.aboutImg}
          src="https://img.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg?w=2000"
          alt="aboutImage"
        />
      </div>
      <div className={aboutStyle.Found}>FOUNDERS</div>
      <div className={aboutStyle.FoundMain}>
        <div className={aboutStyle.FoundSingle}>
          <div className={aboutStyle.FoundFDiv}>
            <img
              className={aboutStyle.FoundImage}
              src="https://avatars.githubusercontent.com/u/105987614?v=4"
              alt="AMAR DEEP"
            />
          </div>
          <h1 className={aboutStyle.FoundName}>AMAR DEEP</h1>
          <h1 className={aboutStyle.FoundName}>Sonbhadra, UP</h1>
          <a
            href="https://www.linkedin.com/in/amar-deep-8359aa246/"
            target="_blank"
          >
            <div className={aboutStyle.FoundLinked}>
              <img
                src="data:image/png;base64,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"
                alt="linkedIN"
              />
              Linked in
            </div>
          </a>
        </div>
        <div className={aboutStyle.FoundSingle}>
          <div className={aboutStyle.FoundFDiv}>
            <img
              className={aboutStyle.FoundImage}
              src="https://avatars.githubusercontent.com/u/102507444?v=4"
              alt="Abhishek Kumar Amber"
            />
          </div>
          <h1 className={aboutStyle.FoundName} style={{ width: "100%" }}>
            Abhishek Kumar Amber
          </h1>
          <h1 className={aboutStyle.FoundName}>Hajipur, Bihar</h1>
          <a href="https://www.linkedin.com/in/abhishekamber" target="_blank">
            <div className={aboutStyle.FoundLinked}>
              <img
                src="data:image/png;base64,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"
                alt="linkedIN"
              />
              Linked in
            </div>
          </a>
        </div>
        <div className={aboutStyle.FoundSingle}>
          <div className={aboutStyle.FoundFDiv}>
            <img
              className={aboutStyle.FoundImage}
              src="https://avatars.githubusercontent.com/u/107456620?v=4"
              alt="Pranay Khadse"
            />
          </div>
          <h1 className={aboutStyle.FoundName}>Pranay Khadse</h1>
          <h1 className={aboutStyle.FoundName} style={{ width: "100%" }}>
            Wardha, Maharashtra
          </h1>
          <a
            href="https://www.linkedin.com/in/pranay-khadse-b2ba86179/"
            target="_blank"
          >
            <div className={aboutStyle.FoundLinked}>
              <img
                src="data:image/png;base64,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"
                alt="linkedIN"
              />
              Linked in
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
