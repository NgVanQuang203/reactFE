import { useEffect, useState } from "react";

// Import link from react scrollbars
import { Link } from "react-scroll";

//React icons
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWidth, setIsWidth] = useState(window.innerWidth);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 left-0 right-0 ">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-36 items-center align-middle">
            <a
              className="text-3xl font-semibold text-primary flex items-center space-x-3 w-10"
              href="#"
            >
              Mr.Quang
            </a>

            {/* Showing navitem using map */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  offset={-100}
                  spy={true}
                  smooth={true}
                  key={link}
                  duration={500}
                  className="block hover:text-gray-300 cursor-pointer"
                  to={path}
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* language and sign up */}
          <div className="space-x-12 md:flex hidden items-center">
            <a
              className="hidden lg:flex items-center hover:text-secondary"
              href="/"
            >
              <GrLanguage className="mr-2" /> <span>Language</span>
            </a>
            <button
              className="bg-secondary py-2 px-4 transition-all duration-300 rounded
            hover:text-white hover:bg-indigo-600"
            >
              Sign Up
            </button>
          </div>

          {/* menu .btn only display on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300 items-center"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary " />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 text-xl bg-secondary shadow-lg
        ${isWidth > 786 ? "hidden" : ""}
        ${isMenuOpen ? "block fixed top-0 right-0 left-0" : " hidden"}`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            offset={-80}
            spy={true}
            smooth={true}
            key={link}
            duration={500}
            className="block hover:text-gray-300 cursor-pointer"
            to={path}
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
