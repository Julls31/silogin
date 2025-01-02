import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <div className="bg-base-100 mx-auto max-w-screen-xl px-4 lg:py-8">
        <h1 className="text-2xl font-bold mt-8">Privacy Policy</h1>
        <p className="mt-4">
          At Silogin, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website.
        </p>
        <ol className="list-decimal pl-6 mt-4 space-y-4">
          <li>
            <span className="font-semibold">Information We Collect</span>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <span className="font-medium">Personal Information:</span> Such as name, email address, phone number, and other details provided during registration or interaction.
              </li>
              <li>
                <span className="font-medium">Non-Personal Information:</span> Such as browser type, IP address, and browsing behavior.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">How We Use Your Information</span>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>To provide and improve our services.</li>
              <li>To communicate with users regarding updates, promotions, or inquiries.</li>
              <li>To analyze website usage for better user experience.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Cookies</span>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Silogin uses cookies to enhance user experience and analyze website performance.</li>
              <li>Users can disable cookies through their browser settings, but some functionalities may be limited.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Sharing of Information</span>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>We do not sell, trade, or rent user information to third parties.</li>
              <li>We may share information with trusted partners to facilitate services, subject to confidentiality agreements.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Data Security</span>
            <p className="mt-2">
              We implement appropriate security measures to protect user data from unauthorized access or breaches.
            </p>
          </li>
          <li>
            <span className="font-semibold">Third-Party Links</span>
            <p className="mt-2">
              Silogin may contain links to external websites. We are not responsible for the privacy practices of such websites.
            </p>
          </li>
          <li>
            <span className="font-semibold">Changes to the Privacy Policy</span>
            <p className="mt-2">
              Silogin reserves the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting.
            </p>
          </li>
          <li>
            <span className="font-semibold">Contact Us</span>
            <p className="mt-2">
              For questions or concerns regarding this Privacy Policy, please contact us.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
}

export default PrivacyPolicy;
