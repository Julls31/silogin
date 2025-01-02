import React from "react";

function TermsAndConditions() {
  return (
    <>
      <div className="bg-base-100 mx-auto max-w-screen-xl px-4 lg:py-8">
        <h1 className="text-2xl font-bold mt-8">Terms and Conditions</h1>
        <p className="mt-4">
          These terms and conditions outline the rules and regulations for the
          use of the Silogin website, located at silogin.id. By accessing this
          website, we assume you accept these terms and conditions. Do not
          continue to use Silogin if you do not agree to all of the terms and
          conditions stated on this page.
        </p>
        <ol className="list-decimal pl-6 mt-4 space-y-4">
          <li>
            <h2 className="font-semibold">Definitions</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Silogin:</strong> Refers to the website and its services.
              </li>
              <li>
                <strong>User:</strong> Any individual or entity accessing or using Silogin.
              </li>
              <li>
                <strong>Content:</strong> Any materials, including text, images, videos, or other data available on Silogin.
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-semibold">Use of the Website</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Users must be at least 18 years old or have parental/guardian permission to access the site.</li>
              <li>Users agree to use the website in compliance with applicable laws and regulations.</li>
              <li>Unauthorized use of the website may result in termination of access.</li>
            </ul>
          </li>
          <li>
            <h2 className="font-semibold">Intellectual Property</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                All content on Silogin is the property of Silogin or its licensors and is protected by copyright and other intellectual property laws.
              </li>
              <li>
                Users may not copy, distribute, or otherwise use the content without prior written consent.
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-semibold">User Content</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Users are responsible for any content they upload or share on the website.</li>
              <li>
                By submitting content, users grant Silogin a non-exclusive, royalty-free license to use, reproduce, and display such content.
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-semibold">Limitation of Liability</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Silogin is not liable for any damages arising from the use or inability to use the website.
              </li>
              <li>The website is provided "as is" without warranties of any kind.</li>
            </ul>
          </li>
          <li>
            <h2 className="font-semibold">Modifications</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Silogin reserves the right to modify or discontinue the website at any time without notice.</li>
              <li>Changes to these terms will be effective immediately upon posting.</li>
            </ul>
          </li>
          <li>
            <h2 className="font-semibold">Governing Law</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                These terms are governed by and construed in accordance with the laws of Indonesia.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
}

export default TermsAndConditions;
