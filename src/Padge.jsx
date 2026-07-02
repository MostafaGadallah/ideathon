import { useState } from "react";

function Padge() {
  const [photoLink, setPhotoLink] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();

    if (!photoLink.trim()) {
      alert("Please enter a valid photo link.");
      return;
    }

    alert(
      "🎉 Your request has been received!\n\nYour personalized event participation poster is being generated and will be sent to your registered email shortly.\n\nThis is a demo feature for the presentation. No actual image processing or email delivery is performed."
    );

    setPhotoLink("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[650px] border border-gray-300 rounded-lg p-8 shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center mb-4">
          Generate Your Event Participation Poster
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Paste a public image link (Google Drive, Dropbox, or any image URL)
          and our system will generate a personalized event poster and send it
          to your registered email.
        </p>

        <form onSubmit={handleGenerate} className="flex flex-col gap-4">
          <label htmlFor="photoLink" className="font-semibold">
            Photo Link
          </label>

          <input
            id="photoLink"
            type="url"
            value={photoLink}
            onChange={(e) => setPhotoLink(e.target.value)}
            placeholder="https://drive.google.com/file/d/..."
            className="border border-gray-400 outline-none p-3 rounded"
            required
          />

          <button
            type="submit"
            className="bg-[#462c38] text-white py-3 rounded hover:opacity-90 transition"
          >
            Generate Poster
          </button>
        </form>

        <div className="mt-8 border-t pt-6">
          <h3 className="font-semibold mb-2">How it works</h3>

          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Paste a public link to your photo.</li>
            <li>Click "Generate Poster".</li>
            <li>Your personalized event poster will be prepared.</li>
            <li>A download link will be sent to your registered email.</li>
          </ol>

          <p className="mt-6 text-sm text-gray-500">
            <strong>Demo Notice:</strong> This feature is for presentation
            purposes only. No real image processing, poster generation, or email
            delivery is performed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Padge;