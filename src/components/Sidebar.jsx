import React from "react";

const Sidebar = ({ region }) => {
  if (!region) {
    return (
      <p className="text-gray-500 italic">
        Click on a region in the image to view details.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-700">Label:</h2>
        <p className="text-gray-900">{region.label || "Unknown"}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700">Coordinates:</h2>
        <p className="text-sm text-gray-600">
          x: {region.x}, y: {region.y}, width: {region.width}, height: {region.height}
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700">Full Detailed View:</h2>
        {region.ingredients && region.ingredients.length > 0 ? (
          <ul className="list-disc list-inside text-gray-800">
            {region.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm italic text-gray-500">No Details listed.</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
