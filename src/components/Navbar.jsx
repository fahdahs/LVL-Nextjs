import { useEffect, useState } from "react";
import logoLightMode from "../assets/lvl.png";
import logoDarkMode from "../assets/logoLightMode.png";
import { BiMoon, BiSun } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";

const navLinks = [
  {
    id: "#",
    name: "Accueil",
  },
  {
    id: "qui_nous_sommes",
    name: "Qui nous sommes",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "réservation",
    name: "Réservation",
  },
  {
    id: "conditions_de_location",
    name: "Conditions de location",
  },
  {
    id: "contacts",
    name: "Contacts",
  },
];

const Navbar = () => {
  // State for dark mode and whether to show navbar
  const [darkMode, setDarkMode] = useState("light");
  const [showNavbar, setShowNavbar] = useState(false);

  // Function to update showNavbar state based on scroll position
  const handleScroll = () => setShowNavbar(window.scrollY > 10);

  useEffect(() => {
    // Add scroll event listener to update navbar visibility
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set initial dark mode based on user's preferred color scheme
  useEffect(() => {
    const isDarkModePreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDarkMode(isDarkModePreferred ? "dark" : "light");
  }, []);

  // Update HTML element class to toggle dark mode styles
  useEffect(() => {
    const htmlEl = document.documentElement;

    if (darkMode === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
  }, [darkMode]);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    const newMode = darkMode === "light" ? "dark" : "light";
    setDarkMode(newMode);

    // Store dark mode preference in localStorage
    localStorage.setItem("darkMode", newMode);
  };

  // Retrieve dark mode preference from localStorage on mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) setDarkMode(storedDarkMode);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 z-[99] lg:px-16 ${
        showNavbar
          ? "backdrop-blur shadow-sm dark:shadow-md bg-white/90 dark:bg-primary-dark-light/70"
          : "bg-white dark:bg-[#0a0c0f]"
      }`}
    >
      <div className="navbar-start mx-auto max-w-7xl">
        <motion.div
          initial={{
            x: -400,
            opacity: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="dropdown"
        >
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle dark:hover:bg-black/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-primary-dark-light dark:shadow-2xl"
          >
            {navLinks.map(({ id, name }) => (
              <li key={id}>
                <Link href={`#${id}`} className="dark:text-gray-200 hover:dark:bg-neutral">{name}</Link>
              </li>
            ))}
            <LanguageSwitcher />
          </ul>
        </motion.div>
      </div>
      <div className="navbar-center">
        <a href="#" className="btn btn-ghost dark:hover:bg-black/10">
          <Image
            src={darkMode === "light" ? logoLightMode : logoDarkMode}
            alt=""
            className="h-9 w-20"
          />
        </a>
      </div>
      <motion.div
        initial={{
          x: 400,
          opacity: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="navbar-end"
      >
        <button
          onClick={toggleDarkMode}
          className="btn btn-ghost btn-circle dark:hover:bg-black/10"
        >
          {darkMode === "light" ? (
            <BiMoon className="h-5 w-5" />
          ) : (
            <BiSun className="h-5 w-5 text-gray-100" />
          )}
        </button>
        <button className="btn btn-ghost btn-circle dark:hover:bg-black/10">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>

            <span className="badge badge-xs badge-primary indicator-item" />
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
