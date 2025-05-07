import React, { useState, useEffect } from "react";

function GuideUser() {
  // Array of YouTube video data for Panduan Pembeli
  const pembeliVideos = [
    {
      title: "Panduan Pembeli 1",
      videoId: "dQw4w9WgXcQ", // Contoh ID video YouTube
    },
    {
      title: "Panduan Pembeli 2",
      videoId: "LsoLEjrDogU",
    },
    {
      title: "Panduan Pembeli 3",
      videoId: "oHg5SJYRHA0",
    },
    {
      title: "Panduan Pembeli 4",
      videoId: "eVtRbKHL6-Q",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Handle video click to display it in a large view
  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <>
      <div className="p-4 mx-auto min-h-screen py-24">
        {/* Panduan Pembeli Section */}
        <div id="panduan-pembeli" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Panduan Pembeli
          </h2>
          
          {/* Display large video if a video is selected */}
          {selectedVideo && (
            <div className="mb-8">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                frameBorder="0"
                allowFullScreen
                title="Video Pembeli"
              ></iframe>
            </div>
          )}

          {/* Video Thumbnails Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {pembeliVideos.map((video, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                  onClick={() => handleVideoClick(video.videoId)}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideUser;
