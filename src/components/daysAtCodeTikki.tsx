import Image from "next/image";
import React from "react";

const DaysAtCodeTikki = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Internship Experience</h2>
      <p>
        {" "}
        I can reimagine my work experience—just wake up, get ready by 9, and get
        the job done. It was a pretty awesome experience for me. Honestly, my
        mind works like this: I can&apos;t think of anything else except my work
        throughout the whole day. And you know, learning something completely
        new is pretty much wholesome because of the dopamine rush after
        completing it.
        <Image src="/meme_brain.webp" alt="meme_1" height={100} width={200} />
      </p>
    </div>
  );
};

export default DaysAtCodeTikki;
