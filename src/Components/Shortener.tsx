import React, { useState } from "react";
import axios from "axios";

const Shortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  // const API_TOKEN: string = "PZJsanffRLzN3YTd30VwRP2o1hO2PkfIhc16w0fRS3TRD";

  const shortenUrl = async () => {
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/"; // CORS error solution
    const url = "https://cleanuri.com/api/v1/shorten"; // API endpoint

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded", // Set the content type as URL-encoded
    };

    const data = new URLSearchParams();
    data.append("url", originalUrl);

    try {
      const response = await axios.post(corsAnywhere + url, data, { headers });

      if (response.status === 200) {
        setShortenedUrl(response.data.result_url); // Update the state with the shortened URL
      } else {
        setShortenedUrl("Error: Failed to shorten URL");
      }
    } catch (error) {
      setShortenedUrl("Error: Failed to shorten URL" + " / " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="bg-gray-200 p-4 rounded-lg w-[1200px] h-[510px] mx-auto shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="mt-8 font-semibold text-xl">
            Paste the URL to be shortened
          </h1>
          <div>
            <div className="flex items-center mt-16">
              <input
                type="text"
                className="h-[56px] w-[444px] p-5"
                placeholder="Enter the link here"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)} // Update the state with the entered URL
              />
              <button
                className="border-1 bg-neutral-800 w-[100px] h-[56px] hover:bg-neutral-700"
                onClick={shortenUrl} // Call the shortenUrl function when the button is clicked
              >
                <span className="text-white">Short URL</span>
              </button>
            </div>
          </div>
          {shortenedUrl && (
            <div className="mt-12">
              <p className="font-semibold">Shortened URL:</p>
              <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                {shortenedUrl}
              </a>
            </div>
          )}

          <a
            href="https://github.com/wlr1"
            className="absolute top-0 font-semibold hover:opacity-[50%] hover:text-gray-900"
            target="_blank"
          >
            github.com/wlr1
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shortener;
