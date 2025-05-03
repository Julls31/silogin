import React from "react";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "../components/ContactUs";

function Privacy() {
    return (
        <>
        <div className="bg-base-100">
        <div className="max-w-screen-xl mx-auto px-4 pt-20">
          <PrivacyPolicy />
        </div>
        {/* <div className="max-w-screen-xl mx-auto px-4 mt-20 mb-32">
          <ContactUs />
        </div> */}
      </div>
        </>
    )
}

export default Privacy;