import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-2 bg-transparent text-[#10B981] flex justify-between items-center w-full max-w-[900px] mx-auto rounded-2xl mt-3 font-mono opacity-90">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link to="/" className="bg-transparent text-[#10B981] hover:outline hover:outline-green-500 px-4 py-2 rounded-2xl">Home</Link>
        <Link to="/projects" className="bg-transparent text-[#10B981] hover:outline hover:outline-green-500 px-4 py-2 rounded-2xl">Projects</Link>
        <Link to="/skills" className="bg-transparent text-[#10B981] hover:outline hover:outline-green-500 px-4 py-2 rounded-2xl">Skills</Link>
        <Link to="/contact" className="bg-transparent text-[#10B981] hover:outline hover:outline-green-500 px-4 py-2 rounded-2xl">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
