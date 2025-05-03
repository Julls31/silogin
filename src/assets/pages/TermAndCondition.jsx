import React from "react";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndCondition";
// import ContactUs from "../components/ContactUs";

function TermAndCondition() {
  return (
    <>
      <div className="bg-base-100">
        <div className="max-w-screen-xl mx-auto px-4 pt-20">
          <TermsAndConditions />
        </div>
        {/* <div className="max-w-screen-xl mx-auto px-4 mt-20 mb-32">
          <ContactUs />
        </div> */}
      </div>
    </>
  );
}
export default TermAndCondition;
