"use client"; // This marks the file as a client component

import { useState, useEffect } from "react";
import { Menu, Search, Sun, Moon } from "lucide-react"; // Import Sun and Moon icons
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for the theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to light mode
      setIsDarkMode(false);
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">Footbally</div>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            Tournaments
          </a>
          <a href="#" className="hover:text-primary">
            Latest Results
          </a>
        </nav>

        {/* Search Input */}
        <div className="hidden md:flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-48"
          />
          <Button className="btn btn-primary">
            <Search size={16} />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="md:block hidden btn btn-ghost ml-4 p-2 rounded-full bg-transparent hover:bg-gray-200 transition-all duration-300"
        >
          {isDarkMode ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-blue-500" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-base-200 p-4 space-y-2">
          <a href="#" className="block hover:text-primary">
            Home
          </a>
          <a href="#" className="block hover:text-primary">
            Tournaments
          </a>
          <a href="#" className="block hover:text-primary">
            History
          </a>
          <div className="flex items-center space-x-2 mt-2">
            <Input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full"
            />
            <Button className="btn btn-primary">
              <Search size={16} />
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
