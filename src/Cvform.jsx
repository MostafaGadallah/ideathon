import { useState } from "react";

function Cvform() {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [city, setCity] = useState("");

const [linkedin, setLinkedin] = useState("");
const [github, setGithub] = useState("");
const [portfolio, setPortfolio] = useState("");

const [university, setUniversity] = useState("");
const [faculty, setFaculty] = useState("");
const [major, setMajor] = useState("");
const [level, setLevel] = useState("");
const [graduationYear, setGraduationYear] = useState("");

const [track, setTrack] = useState("");

const [summary, setSummary] = useState("");

const [technicalSkills, setTechnicalSkills] = useState("");
const [softSkills, setSoftSkills] = useState("");

const [projectName, setProjectName] = useState("");
const [projectTech, setProjectTech] = useState("");
const [projectDescription, setProjectDescription] = useState("");
const [projectGithub, setProjectGithub] = useState("");

const [experience, setExperience] = useState("");

const [certifications, setCertifications] = useState("");

const [volunteering, setVolunteering] = useState("");

const [studentActivities, setStudentActivities] = useState("");

const [languages, setLanguages] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        city,
        linkedin,
        github,
        portfolio,
        university,
        faculty,
        major,
        level,
        graduationYear,
        track,
        summary,
        technicalSkills,
        softSkills,
        projectName,
        projectTech,
        projectDescription,
        projectGithub,
        experience,
        certifications,
        volunteering,
        studentActivities,
        languages,
      }),
    });

    if (response.ok) {
      alert("Your ATS-friendly CV will be sent to your email soon.");
    } else {
      alert("Something went wrong. Please try again.");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    alert("Unable to connect to the server.");
  }
};
    return (
        <>
            <div className="">
              <h1 style={{}} className="text-4xl font-bold text-[#462c38]">
              CV Builder Form
          </h1>
                <div className="cautions max-w-[750px] text-center my-5 mx-auto">
                    <h3 className="text-lg font-bold">Cautions</h3>
                    <p className="text-gray-500 my-2">Be sure to check your E-mail after submitting the form</p>
                </div>
                <form onSubmit={handleSubmit} className="form flex flex-col gap-3 max-w-[600px] mx-auto">

<label className="text-left">Full Name</label>
<input
value={fullName}
onChange={(e)=>setFullName(e.target.value)}
type="text"
placeholder="Full Name"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Email</label>
<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
type="email"
placeholder="Email"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Phone Number</label>
<input
value={phone}
onChange={(e)=>setPhone(e.target.value)}
type="text"
placeholder="Phone Number"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">City</label>
<input
value={city}
onChange={(e)=>setCity(e.target.value)}
type="text"
placeholder="City"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">LinkedIn Profile</label>
<input
value={linkedin}
onChange={(e)=>setLinkedin(e.target.value)}
type="url"
placeholder="https://linkedin.com/in/username"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">GitHub Profile</label>
<input
value={github}
onChange={(e)=>setGithub(e.target.value)}
type="url"
placeholder="https://github.com/username"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Portfolio Website (Optional)</label>
<input
value={portfolio}
onChange={(e)=>setPortfolio(e.target.value)}
type="url"
placeholder="https://portfolio.com"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">University</label>
<input
value={university}
onChange={(e)=>setUniversity(e.target.value)}
type="text"
placeholder="University"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Faculty / College</label>
<input
value={faculty}
onChange={(e)=>setFaculty(e.target.value)}
type="text"
placeholder="Faculty"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Major</label>
<input
value={major}
onChange={(e)=>setMajor(e.target.value)}
type="text"
placeholder="Computer Science"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Academic Year</label>
<select
value={level}
onChange={(e)=>setLevel(e.target.value)}
className="border border-gray-600 outline-none p-3"
>
<option value="">Select</option>
<option>1st</option>
<option>2nd</option>
<option>3rd</option>
<option>4th</option>
<option>Graduate</option>
</select>

<label className="text-left">Expected Graduation Year</label>
<input
value={graduationYear}
onChange={(e)=>setGraduationYear(e.target.value)}
type="number"
placeholder="2028"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Target Career Track</label>
<select
value={track}
onChange={(e)=>setTrack(e.target.value)}
className="border border-gray-600 outline-none p-3"
>
<option value="">Select</option>
<option>Backend</option>
<option>Frontend</option>
<option>Full Stack</option>
<option>Mobile</option>
<option>UI/UX</option>
<option>AI/ML</option>
<option>Data Analysis</option>
<option>Cyber Security</option>
<option>QA</option>
<option>DevOps</option>
</select>

<label className="text-left">Professional Summary</label>
<textarea
value={summary}
onChange={(e)=>setSummary(e.target.value)}
rows="5"
placeholder="Write a short professional summary..."
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Technical Skills</label>
<textarea
value={technicalSkills}
onChange={(e)=>setTechnicalSkills(e.target.value)}
rows="3"
placeholder="HTML, CSS, JavaScript, React, Laravel..."
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Soft Skills</label>
<textarea
value={softSkills}
onChange={(e)=>setSoftSkills(e.target.value)}
rows="3"
placeholder="Communication, Leadership, Teamwork..."
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Project Name</label>
<input
value={projectName}
onChange={(e)=>setProjectName(e.target.value)}
type="text"
placeholder="Student Management System"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Technologies Used</label>
<input
value={projectTech}
onChange={(e)=>setProjectTech(e.target.value)}
type="text"
placeholder="React, Laravel, MySQL"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Project Description</label>
<textarea
value={projectDescription}
onChange={(e)=>setProjectDescription(e.target.value)}
rows="4"
placeholder="Describe your project..."
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Project GitHub</label>
<input
value={projectGithub}
onChange={(e)=>setProjectGithub(e.target.value)}
type="url"
placeholder="https://github.com/..."
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Experience / Internships</label>
<textarea
value={experience}
onChange={(e)=>setExperience(e.target.value)}
rows="4"
placeholder="Describe your experience..."
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Courses & Certifications</label>
<textarea
value={certifications}
onChange={(e)=>setCertifications(e.target.value)}
rows="3"
placeholder="Course - Provider"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Volunteering</label>
<textarea
value={volunteering}
onChange={(e)=>setVolunteering(e.target.value)}
rows="3"
placeholder="Organization - Role"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Student Activities</label>
<textarea
value={studentActivities}
onChange={(e)=>setStudentActivities(e.target.value)}
rows="3"
placeholder="Organization - Position"
className="border border-gray-600 outline-none p-3"
/>

<label className="text-left">Languages</label>
<input
value={languages}
onChange={(e)=>setLanguages(e.target.value)}
type="text"
placeholder="Arabic, English"
className="border border-gray-600 outline-none p-3"
/>

<button
type="submit"
className="bg-[#462c38] text-white py-3"
>
Generate ATS-Friendly CV
</button>

</form>
            </div>
        </>
    )
}

export default Cvform