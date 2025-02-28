"use client"; // Marks this file as a client component

import { useState, useEffect } from "react";
import { Menu, X, Search, Sun, Moon } from "lucide-react"; // Import icons
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
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } shadow-md sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">Footbally</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">Tournaments</a>
          <a href="#" className="hover:text-primary">Latest Results</a>
        </nav>

        {/* Search Input (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          <Input type="text" placeholder="Search..." className="w-48" />
          <Button className="btn-primary">
            <Search size={16} />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="hidden md:block p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-purple-500" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 dark:bg-gray-900 p-4 space-y-4">
          <a href="#" className="block hover:text-primary">Home</a>
          <a href="#" className="block hover:text-primary">Tournaments</a>
          <a href="#" className="block hover:text-primary">History</a>
          <div className="flex items-center space-x-2 mt-2">
            <Input type="text" placeholder="Search..." className="w-full" />
            <Button className="btn-primary">
              <Search size={16} />
            </Button>
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 w-full rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-purple-500" />
            )}
            <span className="ml-2">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </nav>
      )}
    </header>
  );
}
