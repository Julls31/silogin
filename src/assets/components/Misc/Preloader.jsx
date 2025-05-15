// src/assets/components/Misc/Preloader.jsx
import React from "react";

function Preloader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-600"></div>
        <div>
          <img src="/image/logo1.png" />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
