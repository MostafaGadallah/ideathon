import { useState } from "react";

function Form() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
const [university, setUniversity] = useState("");
const [level, setLevel] = useState("");
const [faculty, setFaculty] = useState("");
const [track, setTrack] = useState("");
const [linkedin, setLinkedin] = useState("");
const [github, setGithub] = useState("");
const [cvLink, setCvLink] = useState("");
const [helpWith, setHelpWith] = useState("");
const [challenge, setChallenge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Submitting...");
    const response = await fetch("http://localhost:3000/next", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  name,
  email,
  number,
  university,
  level,
  faculty,
  track,
  linkedin,
  github,
  cvLink,
  helpWith,
  challenge,
}),
    });

    const data = await response.json();
    console.log(data);
  };
    return (
        <>
            <div className="">
              <h1 className="text-4xl font-bold text-[#462c38]">
              Registration Form
          </h1>
                <div className="cautions max-w-[750px] text-center my-5 mx-auto">
                    <h3 className="text-lg font-bold">Cautions</h3>
                    <p className="text-gray-500 my-2">Be sure to check your E-mail after submitting the form</p>
                </div>
                <form onSubmit={handleSubmit} className="form flex flex-col gap-3 max-w-[600px] mx-auto" action="">
                    <label htmlFor="name" className="text-left">Full Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="border border-gray-600 outline-none p-3"
                      required
                    />

                    <label htmlFor="email" className="text-left">Email Address</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border border-gray-600 outline-none p-3"
                      required
                    />

                    <label htmlFor="number" className="text-left">Phone Number</label>
                    <input
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      name="number"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border border-gray-600 outline-none p-3"
                      required
                    />

                    <label htmlFor="university" className="text-left">University</label>
                    <input
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                      name="university"
                      type="text"
                      placeholder="Enter your university"
                      className="border border-gray-600 outline-none p-3"
                      required
                    />

                    <label htmlFor="faculty" className="text-left">Faculty</label>
                    <input
                      value={faculty}
                      onChange={(e) => setFaculty(e.target.value)}
                      name="faculty"
                      type="text"
                      placeholder="Enter your faculty"
                      className="border border-gray-600 outline-none p-3"
                      required
                    />

                    <label htmlFor="level" className="text-left">Academic Level</label>
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      name="level"
                      className="text-left border border-gray-600 outline-none p-3"
                      required
                    >
                      <option value="">Select your academic level:</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                      <option value="Graduate">Graduate</option>
                    </select>

                    <label htmlFor="track" className="text-left">Target Career Track</label>
<select
  value={track}
  onChange={(e) => setTrack(e.target.value)}
  name="track"
  className="text-left border border-gray-600 outline-none p-3"
>
  <option value="">Select an option:</option>
  <option value="Backend">Backend</option>
  <option value="Frontend">Frontend</option>
  <option value="Full Stack">Full Stack</option>
  <option value="Mobile">Mobile</option>
  <option value="UI/UX">UI/UX</option>
  <option value="Data Analysis">Data Analysis</option>
  <option value="Data Science">Data Science</option>
  <option value="AI/ML">AI/ML</option>
  <option value="Cyber Security">Cyber Security</option>
  <option value="QA">QA</option>
  <option value="DevOps">DevOps</option>
  <option value="Cloud">Cloud</option>
  <option value="Other">Other</option>
</select>

<label htmlFor="linkedin" className="text-left">LinkedIn Profile</label>
<input
  value={linkedin}
  onChange={(e) => setLinkedin(e.target.value)}
  name="linkedin"
  type="url"
  placeholder="https://linkedin.com/in/your-profile"
  className="border border-gray-600 outline-none p-3"
/>

<label htmlFor="github" className="text-left">GitHub Profile (Optional)</label>
<input
  value={github}
  onChange={(e) => setGithub(e.target.value)}
  name="github"
  type="url"
  placeholder="https://github.com/username"
  className="border border-gray-600 outline-none p-3"
/>

<label htmlFor="cvLink" className="text-left">CV Google Drive Link</label>
<input
  value={cvLink}
  onChange={(e) => setCvLink(e.target.value)}
  name="cvLink"
  type="url"
  placeholder="Paste your Google Drive CV link"
  className="border border-gray-600 outline-none p-3"
/>

<label htmlFor="helpWith" className="text-left">What do you need help with?</label>
<select
  value={helpWith}
  onChange={(e) => setHelpWith(e.target.value)}
  name="helpWith"
  className="text-left border border-gray-600 outline-none p-3"
>
  <option value="">Select an option:</option>
  <option value="CV Review">CV Review</option>
  <option value="Mock Interview">Mock Interview</option>
  <option value="LinkedIn Review">LinkedIn Review</option>
  <option value="All of the above">All of the above</option>
</select>

<label htmlFor="challenge" className="text-left">
  Biggest Challenge / Anything you want the HR to know
</label>
<textarea
  value={challenge}
  onChange={(e) => setChallenge(e.target.value)}
  name="challenge"
  placeholder="Tell us what you want to improve..."
  className="border border-gray-600 outline-none p-3"
  rows="4"
/>
                    <button type="submit" className="bg-[#462c38] text-white py-3 ">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form