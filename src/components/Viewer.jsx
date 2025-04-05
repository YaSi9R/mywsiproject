import React, { useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";
import outputData from "../data/output.json"; 
import dummyImage from "../assets/wsi.png"

const Viewer = ({ setSelectedRegion }) => {
  const viewerRef = useRef(null);
  const osdViewer = useRef(null);

  useEffect(() => {
    osdViewer.current = OpenSeadragon({
      element: viewerRef.current,
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      tileSources: {
        type: "image",
        url: "/wsi.jpg",
      },
      showNavigator: false,
      animationTime: 0.5,
      blendTime: 0.1,
      maxZoomPixelRatio: 2,
      zoomPerScroll: 1.2,
    });

    osdViewer.current.addHandler("open", () => {
      
      outputData.forEach((item) => {
        const box = document.createElement("div");
        box.className = "border-2 border-red-500 absolute z-50 cursor-pointer";
        box.style.width = `${item.width}px`;
        box.style.height = `${item.height}px`;

        osdViewer.current.addOverlay({
          element: box,
          location: new OpenSeadragon.Rect(item.x, item.y, item.width, item.height),
        });

        box.addEventListener("click", () => {
          setSelectedRegion(item);
          const center = new OpenSeadragon.Point(item.x + item.width / 2, item.y + item.height / 2);
          osdViewer.current.viewport.panTo(center);
          osdViewer.current.viewport.zoomTo(1.5);
        });
      });
    });

    return () => {
      if (osdViewer.current) {
        osdViewer.current.destroy();
        osdViewer.current = null;
      }
    };
  }, [setSelectedRegion]);

  return (
    <div
      ref={viewerRef}
      className="w-full h-[500px] md:h-full rounded-lg shadow-lg border border-gray-300"
    ></div>
  );
};

export default Viewer;
