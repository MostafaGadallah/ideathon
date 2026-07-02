import Headerimg from "./assets/next_station.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="text-left">
          <span className="bg-[#462c38] text-white px-4 py-2 rounded-full text-sm">
            Ideathon 2026
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight">
            Build Your Future,
            <br />
            <span className="text-[#462c38]">
              One Opportunity at a Time.
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Join an inspiring day of innovation, career development, and
            networking. Receive professional CV reviews, participate in mock
            interviews, improve your LinkedIn profile, and connect with HR
            professionals and industry experts.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to"
              className="bg-[#462c38] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Register Now
            </Link>

            <a
              href="/ats-cv-builder"
              className="border border-[#462c38] text-[#462c38] px-6 py-3 rounded-lg hover:bg-[#462c38] hover:text-white transition"
            >
              Build ATS CV
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-[#462c38]">150+</h2>
              <p className="text-gray-600">Participants</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#462c38]">20+</h2>
              <p className="text-gray-600">HR Experts</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#462c38]">10+</h2>
              <p className="text-gray-600">Workshops</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={Headerimg}
            alt="Ideathon"
            className="w-full max-w-lg"
          />
        </div>

      </div>

      {/* Vision Section */}
      <div className="mt-24 grid md:grid-cols-3 gap-8">

        <div className="shadow-md rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-3">🎯 Vision</h3>
          <p className="text-gray-600">
            Empower students with the practical skills, confidence, and
            professional guidance needed to start successful careers.
          </p>
        </div>

        <div className="shadow-md rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-3">💡 Innovate</h3>
          <p className="text-gray-600">
            Encourage creative thinking, problem-solving, and collaboration
            through interactive sessions and real-world career experiences.
          </p>
        </div>

        <div className="shadow-md rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-3">🤝 Connect</h3>
          <p className="text-gray-600">
            Build meaningful connections between students, HR professionals,
            mentors, and industry leaders to create future opportunities.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Header;