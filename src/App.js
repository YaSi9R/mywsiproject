import React, { useState } from "react";
import Viewer from "./components/Viewer";
import Sidebar from "./components/Sidebar";
import MiniMap from "./components/MiniMap";

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar - Left */}
      <div className="w-full md:w-1/4 bg-white shadow-md p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Full Detailed View</h1>
        <Sidebar region={selectedRegion} />
      </div>

      {/* Viewer - Middle */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        <Viewer setSelectedRegion={setSelectedRegion} />
      </div>

      {/* MiniMap - Right */}
      <div className="w-full md:w-1/4 bg-white p-4 shadow-md hidden md:block">
        <h2 className="text-xl font-semibold text-blue-600">Slide Overview</h2>
        <MiniMap />
      </div>
    </div>
  );
}

export default App;
