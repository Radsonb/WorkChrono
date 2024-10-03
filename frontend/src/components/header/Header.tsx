import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow">
            <nav className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">WorkChrono</h1>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to='/reports' className="hover:underline">Reports</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;