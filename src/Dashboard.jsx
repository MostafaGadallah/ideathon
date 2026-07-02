function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#462c38] mb-2">
          Organizer Dashboard
        </h1>

        <p className="text-gray-600 mb-10">
          Monitor registrations, attendance, and event statistics.
        </p>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#462c38]">
            <p className="text-gray-500">Total Registrations</p>
            <h2 className="text-4xl font-bold mt-2">248</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-600">
            <p className="text-gray-500">Checked In</p>
            <h2 className="text-4xl font-bold mt-2">181</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-600">
            <p className="text-gray-500">HR Attendees</p>
            <h2 className="text-4xl font-bold mt-2">18</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-yellow-500">
            <p className="text-gray-500">VIP Guests</p>
            <h2 className="text-4xl font-bold mt-2">7</h2>
          </div>

        </div>

        {/* Event Progress */}
        <div className="bg-white rounded-xl shadow mt-10 p-6">

          <h2 className="text-2xl font-bold text-[#462c38] mb-5">
            Attendance Progress
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-[#462c38] h-5 rounded-full"
              style={{ width: "73%" }}
            ></div>
          </div>

          <p className="mt-3 text-gray-600">
            181 of 248 registered participants have checked in.
          </p>

        </div>

        {/* Distribution */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold text-[#462c38] mb-5">
              Participants by Track
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Frontend</span>
                <span>54</span>
              </div>

              <div className="flex justify-between">
                <span>Backend</span>
                <span>61</span>
              </div>

              <div className="flex justify-between">
                <span>Full Stack</span>
                <span>39</span>
              </div>

              <div className="flex justify-between">
                <span>AI / ML</span>
                <span>27</span>
              </div>

              <div className="flex justify-between">
                <span>Cyber Security</span>
                <span>18</span>
              </div>

              <div className="flex justify-between">
                <span>UI / UX</span>
                <span>22</span>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold text-[#462c38] mb-5">
              Event Services Requested
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Mock Interview</span>
                <span>174</span>
              </div>

              <div className="flex justify-between">
                <span>CV Review</span>
                <span>212</span>
              </div>

              <div className="flex justify-between">
                <span>LinkedIn Review</span>
                <span>149</span>
              </div>

              <div className="flex justify-between">
                <span>Career Guidance</span>
                <span>96</span>
              </div>

            </div>

          </div>

        </div>

        {/* Recent Check-ins */}
        <div className="bg-white rounded-xl shadow mt-10 p-6">

          <h2 className="text-2xl font-bold text-[#462c38] mb-5">
            Recent Check-ins
          </h2>

          <table className="w-full text-left">

            <thead className="border-b">
              <tr>
                <th className="py-3">Name</th>
                <th>Role</th>
                <th>Track</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-3">Ahmed Mohamed</td>
                <td>Student</td>
                <td>Backend</td>
                <td>09:18 AM</td>
                <td className="text-green-600 font-semibold">
                  Checked In
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Mariam Ali</td>
                <td>HR</td>
                <td>-</td>
                <td>09:31 AM</td>
                <td className="text-green-600 font-semibold">
                  Checked In
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Omar Hassan</td>
                <td>VIP</td>
                <td>-</td>
                <td>09:46 AM</td>
                <td className="text-green-600 font-semibold">
                  Checked In
                </td>
              </tr>

              <tr>
                <td className="py-3">Sara Mahmoud</td>
                <td>Student</td>
                <td>Frontend</td>
                <td>09:58 AM</td>
                <td className="text-green-600 font-semibold">
                  Checked In
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;