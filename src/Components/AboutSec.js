import React from "react";
import myPic from "../assets/my-pic.jpg";
import useDownloadPDF from "../hooks/useDownloadPDF";
function AboutSec() {
  const download = useDownloadPDF(
    "https://drive.google.com/file/d/1BLyIMKk0P2M5E4mt9czqtXHR3JlvewC4/view?usp=sharing"
  );
  
  return (
    <section>
      <div className="container-two">
        <div className="my-pic">
          <img src={myPic} alt="Hamza's pic" />
        </div>
        <div className="text-one">
          <h1>
            Hello, I'm <span>Hamza</span>
          </h1>
          <h3 className="positions">
            I'm a <span></span>
          </h3>
          <p>
            A passionate web developer and web designer. With a deep
            understanding of both the technical and creative aspects of the web,
            I specialize in crafting visually stunning, user-friendly websites
            and mobile apps. My expertise spans across developing responsive,
            high-performance websites, designing intuitive UI/UX experiences,
            and bringing creative ideas to life through clean, functional code.
            I'm committed to delivering solutions that not only look great but
            also offer seamless, engaging user experiences.
          </p>
        <button onClick={download} className="button-style">
          Download My CV
        </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSec;
