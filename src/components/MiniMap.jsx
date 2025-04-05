import React from "react";
import outputData from "../data/output.json"; 
import dummyImage from "../assets/wsi.png"

const MiniMap = () => {
  const imageWidth = 800;  
  const imageHeight = 600;

  return (
    <div className="relative w-full h-64 bg-gray-100 border rounded shadow-inner">
      {/* Base Image */}
      <img
        src={dummyImage}
        alt="MiniMap"
        className="w-full h-full object-cover rounded"
      />

     
      {outputData.map((region, index) => {
        const left = (region.x / imageWidth) * 100;
        const top = (region.y / imageHeight) * 100;
        const width = (region.width / imageWidth) * 100;
        const height = (region.height / imageHeight) * 100;

        return (
          <div
            key={index}
            className="absolute border border-blue-500"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${width}%`,
              height: `${height}%`,
              boxSizing: "border-box",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default MiniMap;
