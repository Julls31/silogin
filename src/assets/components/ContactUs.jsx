import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-24">
      <section
        className="bg-cover bg-center rounded-lg py-0 px-0 md:py-24"
        style={{ backgroundImage: "url(/image/table_bg.png)" }}
      >
        <div className="bg-base-100 lg:p-8 pt-8 rounded-lg text-center">
          {/* Heading */}
          <h1 className="text-2xl lg:text-3xl font-medium text-gray-800">
            Tingkatkan pengalaman pelanggan <br /> Anda hari ini.
          </h1>

          {/* Button */}
          <button className="btn btn-primary btn-outline mt-6 px-6 py-2 rounded-full font-medium">
            <i className="fa fa-arrow-right"/> Hubungi Kami
          </button>

          {/* Images */}
          <div className="relative mt-12">
            <div className="flex justify-center">
              <img
                src="/image/Image_46.png"
                alt="Speech Bubble Red"
                className="w-32"
              />
              <img
                src="/image/Image_47.png"
                alt="Speech Bubble Light Red"
                className="w-32 -ml-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
