function Timeline() {
  const schedule = [
    {
      time: "09:00 - 09:30 AM",
      title: "Registration & Check-in",
      speaker: "Event Team",
      description: "Participants check in using their QR code.",
    },
    {
      time: "09:30 - 10:00 AM",
      title: "Opening Ceremony",
      speaker: "Organizing Committee",
      description: "Welcome speech and event introduction.",
    },
    {
      time: "10:00 - 11:00 AM",
      title: "ATS-Friendly CV Workshop",
      speaker: "Guest Speaker",
      description: "Learn how to build an ATS-friendly resume.",
    },
    {
      time: "11:15 - 12:00 PM",
      title: "LinkedIn Optimization",
      speaker: "HR Specialist",
      description: "Improve your LinkedIn profile and personal branding.",
    },
    {
      time: "12:00 - 12:30 PM",
      title: "Networking Break",
      speaker: "-",
      description: "Meet mentors, HR representatives, and fellow participants.",
    },
    {
      time: "12:30 - 03:00 PM",
      title: "Mock Interviews",
      speaker: "HR Panel",
      description: "One-to-one interview sessions with recruiters.",
    },
    {
      time: "03:00 - 04:00 PM",
      title: "Career Consultation",
      speaker: "Career Coaches",
      description: "Receive personalized CV and career feedback.",
    },
    {
      time: "04:00 - 04:30 PM",
      title: "Closing Ceremony",
      speaker: "Organizing Committee",
      description: "Closing remarks and appreciation.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-[#462c38] text-center mb-10">
        Event Timeline
      </h1>

      <div className="space-y-6">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#462c38]"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{item.title}</h2>

              <span className="bg-[#462c38] text-white px-4 py-2 rounded-full text-sm">
                {item.time}
              </span>
            </div>

            <p className="mt-3 text-gray-700">
              <strong>Speaker:</strong> {item.speaker}
            </p>

            <p className="mt-2 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;