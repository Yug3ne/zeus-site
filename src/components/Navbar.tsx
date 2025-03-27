import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 h-16 bg-transparent w-full flex justify-between items-center border-b-[0.1px] border-gray-400 text-white">
      {/* left side */}
      <nav className="h-full w-[150px]">
        <NavLink
          to="/"
          className="h-full flex-1 flex items-center border-r-[0.1px] border-gray-400 px-4 hover:bg-[#252121e1]"
        >
          <img src="/icons/icon.svg" alt="Logo" />
        </NavLink>
      </nav>
      {/* right side */}
      <nav className="flex h-full w-[500px]">
        <NavLink
          to="/"
          end
          className="flex-1 flex justify-center items-center font-semibold border-r-[0.1px] border-l-[0.1px] border-gray-400 hover:bg-[#252121e1] hover:text-white"
        >
          HOME
        </NavLink>
        <NavLink
          to="/services"
          className="flex-1 flex justify-center items-center font-semibold border-r-[0.1px] border-gray-400 hover:bg-[#252121e1] hover:text-white"
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/contact"
          className="flex-1 flex justify-center items-center font-semibold border-gray-400 hover:bg-[#252121e1] hover:text-white"
        >
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
