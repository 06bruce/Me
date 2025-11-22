import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Nshuti Bruce</div>
          <div className="hidden md:flex space-x-8">
            <Link to="about" smooth={true} className="cursor-pointer hover:text-primary transition">About</Link>
            <Link to="skills" smooth={true} className="cursor-pointer hover:text-primary transition">Skills</Link>
            <Link to="projects" smooth={true} className="cursor-pointer hover:text-primary transition">Projects</Link>
            <Link to="contact" smooth={true} className="cursor-pointer hover:text-primary transition">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/06bruce" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-primary transition" />
            </a>
            <a href="https://www.linkedin.com/in/nshuti-bruce-b74150266/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B7f2032a9-ef41-4386-8d74-6c0ff8959582" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-primary transition" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;