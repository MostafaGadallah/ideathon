function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "5 Tips to Make Your CV ATS-Friendly",
      category: "CV Writing",
      author: "Career Team",
      date: "July 2026",
      description:
        "Learn how to structure your CV, use keywords, and increase your chances of passing Applicant Tracking Systems (ATS).",
    },
    {
      id: 2,
      title: "How to Ace Your Next Mock Interview",
      category: "Interview",
      author: "HR Mentors",
      date: "July 2026",
      description:
        "Discover the most common interview questions, how to answer confidently, and mistakes you should avoid.",
    },
    {
      id: 3,
      title: "Optimize Your LinkedIn Profile in 10 Minutes",
      category: "LinkedIn",
      author: "Talent Acquisition Team",
      date: "July 2026",
      description:
        "Build a professional LinkedIn profile that attracts recruiters and highlights your skills effectively.",
    },
    {
      id: 4,
      title: "Top Technical Skills Companies Look For",
      category: "Career",
      author: "Industry Experts",
      date: "July 2026",
      description:
        "Explore the most in-demand technical and soft skills that employers seek in fresh graduates and interns.",
    },
    {
      id: 5,
      title: "Networking: The Hidden Key to Career Success",
      category: "Networking",
      author: "Event Speakers",
      date: "July 2026",
      description:
        "Networking isn't just collecting contacts—it's about building meaningful professional relationships that open new opportunities.",
    },
    {
      id: 6,
      title: "Portfolio vs. Resume: Why You Need Both",
      category: "Portfolio",
      author: "Software Engineers",
      date: "July 2026",
      description:
        "Your resume gets you noticed, but your portfolio proves your skills. Learn how to build both effectively.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#462c38]">
            Career Insights & Blogs
          </h1>

          <p style={{ marginLeft: "auto", marginRight: "auto" }} className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Stay updated with career advice, interview preparation,
            CV writing tips, LinkedIn optimization, and industry insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="bg-[#462c38] h-2"></div>

              <div className="p-6">

                <span className="inline-block bg-[#462c38]/10 text-[#462c38] text-sm px-3 py-1 rounded-full">
                  {blog.category}
                </span>

                <h2 className="text-2xl font-bold mt-4 mb-3">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-5">
                  {blog.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                <button
                  className="mt-6 w-full bg-[#462c38] text-white py-3 rounded-lg hover:opacity-90 transition"
                  onClick={() =>
                    alert(
                      "This is a demo article for presentation purposes."
                    )
                  }
                >
                  Read More
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Blogs;