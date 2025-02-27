"use client"; // This marks the file as a client component

import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-base-100 shadow-md sticky top-0 z-50">
			<div className="container mx-auto flex items-center justify-between p-4">
				{/* Logo */}
				<div className="text-xl font-bold text-primary">Footbally</div>

				{/* Navigation for larger screens */}
				<nav className="hidden md:flex space-x-6">
					<a href="#" className="text-gray-700 hover:text-primary">
						Home
					</a>
					<a href="#" className="text-gray-700 hover:text-primary">
						Tournaments
					</a>
					<a href="#" className="text-gray-700 hover:text-primary">
						History
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
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<nav className="md:hidden bg-base-200 p-4 space-y-2">
					<a href="#" className="block text-gray-700 hover:text-primary">
						Home
					</a>
					<a href="#" className="block text-gray-700 hover:text-primary">
						Tournaments
					</a>
					<a href="#" className="block text-gray-700 hover:text-primary">
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
