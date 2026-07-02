import { Link } from "react-router-dom";
import logo from './assets/logo.png';
function Navbar() {

    return (
        <>
            <nav className='flex justify-between h-[80px] bg-black w-full'>
                <div className="logo ms-10">
                    <img src={logo} style={{ maxWidth: "80px", maxHeight: "80px", borderRadius: "50%" }} alt="logo" />
                </div>
                <ul className="flex gap-5 items-center me-10">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/registration">Registration</Link></li>
                    <li><Link to="/ats-cv-builder">ATS CV</Link></li>
                    <li><Link to="/event-poster">Event Poster</Link></li>
                    <li><Link to="/timeline">Timeline</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar