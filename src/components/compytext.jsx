import React, { useRef } from "react";
import copy from "../assets/copy.svg";

const CopyTextComponent = () => {
  const textRef = useRef(null);

  const handleCopy = () => {
    // Select the text inside the text element
    textRef.current.select();
    // Copy the selected text
    document.execCommand("copy");
    // Deselect the text
    window.getSelection().removeAllRanges();
    // Optionally, you can provide some feedback to the user that the text has been copied
    alert("Text copied to clipboard!");
  };

  return (
    <div>
      <div
        className="bg-primary-lightBlue py-3 px-5 rounded-lg flex align-center justify-between gap-5 mb-2 active:opacity-75 cursor-pointer"
        ref={textRef}
        onClick={handleCopy}
      >
        <div className="">
          <p className="font-medium text-xl">5228 6005 5788 5854</p>
          <p>Abduraxmon Davronbek O'g'li</p>
        </div>
        <img src={copy} alt="yuq" />
      </div>
    </div>
  );
};

export default CopyTextComponent;
