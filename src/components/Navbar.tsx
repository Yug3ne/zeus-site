import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 px-4 z-50 h-16 bg-transparent w-full flex justify-between items-center border-b-[0.1px] border-gray-400 text-white">
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
      <nav className="hidden md:flex h-full w-[500px]">
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
      {menuOpen ? (
        <X
          size={30}
          onClick={() => setMenuOpen(false)}
          className="block md:hidden z-10"
        />
      ) : (
        <MenuIcon
          size={30}
          onClick={() => setMenuOpen(true)}
          className="block md:hidden z-10"
          color="yellow"
        />
      )}
      {menuOpen && (
        <div className="flex flex-col top-12 justify-center items-center gap-8 text-4xl absolute bg-[#000000da] w-full h-screen md:hidden">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
