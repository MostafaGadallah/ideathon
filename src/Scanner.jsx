import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const attendees = [
  {
    id: "IDEA001",
    name: "Ahmed Mohamed",
    role: "Student",
    track: "Backend",
    university: "Helwan University",
    email: "ahmed@example.com",
  },
  {
    id: "IDEA002",
    name: "Mariam Ali",
    role: "HR",
    company: "Vodafone Egypt",
    email: "mariam@example.com",
  },
  {
    id: "IDEA003",
    name: "Omar Hassan",
    role: "VIP",
    organization: "Microsoft",
    email: "omar@example.com",
  },
];

function Scanner() {
  const [attendee, setAttendee] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: 450,
      },
      false
    );

    scanner.render(success, error);

    function success(decodedText) {
      const person = attendees.find((p) => p.id === decodedText);

      if (person) {
        setAttendee(person);
      } else {
        alert("Attendee not found.");
      }

      scanner.clear().catch((err) => {
        console.error(err);
      });
    }

    function error() {}

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold my-5">Scan QR Code</h2>

      <div id="reader"></div>

      {attendee && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] shadow-xl">

            <h2 className="text-2xl font-bold text-center mb-5">
              Attendee Information
            </h2>

            <p>
              <strong>Name:</strong> {attendee.name}
            </p>

            <p>
              <strong>ID:</strong> {attendee.id}
            </p>

            <p>
              <strong>Role:</strong> {attendee.role}
            </p>

            {attendee.track && (
              <p>
                <strong>Track:</strong> {attendee.track}
              </p>
            )}

            {attendee.university && (
              <p>
                <strong>University:</strong> {attendee.university}
              </p>
            )}

            {attendee.company && (
              <p>
                <strong>Company:</strong> {attendee.company}
              </p>
            )}

            {attendee.organization && (
              <p>
                <strong>Organization:</strong> {attendee.organization}
              </p>
            )}

            <p>
              <strong>Email:</strong> {attendee.email}
            </p>

            <button
              onClick={() => setAttendee(null)}
              className="mt-6 w-full bg-[#462c38] text-white py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default Scanner;