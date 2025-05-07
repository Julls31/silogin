import React, { useEffect } from "react";

function GuideVendor() {
  // Array of YouTube video data for Panduan Penyedia
  const penyediaVideos = [
    {
      title: "Panduan Penyedia 1",
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "Panduan Penyedia 2",
      videoId: "LsoLEjrDogU",
    },
    {
      title: "Panduan Penyedia 3",
      videoId: "oHg5SJYRHA0",
    },
    {
      title: "Panduan Penyedia 4",
      videoId: "eVtRbKHL6-Q",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <div className="p-4 mx-auto min-h-screen py-24">
        {/* Panduan Penyedia Section */}
        <div id="panduan-penyedia">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Panduan Penyedia
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {penyediaVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {video.title}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideVendor;
