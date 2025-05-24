import React, { useState, useEffect } from "react";

function GuideVendor() {
  const penyediaVideos = [
    { title: "Panduan Klaim SiLogin", videoId: "E1Zx4XZiBDE" },
    { title: "Panduan Pembayaran Asuransi SiLogin", videoId: "xFlvZyHSudQ" },
    { title: "Panduan Pembuatan Akun Vendor SiLogin", videoId: "-6bQfaHEFYg" },
    // { title: "Panduan Penyedia 4", videoId: "yAoLSRbwxL8" },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="p-4 mx-4 min-h-screen py-24">
      <div id="panduan-penyedia" className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Panduan Penyedia
        </h2>

        {/* Display large video if a video is selected */}
        {selectedVideo && (
          <div className="mb-8 flex justify-center">
            <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  frameBorder="0"
                  allowFullScreen
                  title="Video Penyedia"
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {penyediaVideos.map((video, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleVideoClick(video.videoId)}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuideVendor;
