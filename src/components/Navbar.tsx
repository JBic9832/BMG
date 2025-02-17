import React, { useState } from "react";

export default function Navbar() {
    const [mobileMenuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="w-full top-0 shadow-md bg-zinc-800 text-white py-4">
            <div className="max-w-7xl mx-auto flex justify-between px-4 sm:px-20 sm:py-4 items-center">
                <a href="/">
                    {/* <h1 className="text-2xl 2xl:text-4xl font-semibold"></h1> */}
                    <img className="w-24 sm:w-32 rounded-lg" src="bmg_logo.png" alt="company logo" />
                </a>
                <div className="sm:hidden flex justify-center items-center">
                    <button
                        onClick={() => setMenuOpen(!mobileMenuOpen)}
                        className="py-3 ml-3 bg-transparent h-full border-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${mobileMenuOpen ? "hidden" : "show"} h-6 w-6`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${mobileMenuOpen ? "show" : "hidden"} h-6 w-6`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button >
                    <div
                        onClick={() => setMenuOpen(false)}
                        className={`${mobileMenuOpen ? "show" : "hidden"} sm:hidden fixed h-screen top-0 left-0 bottom-0 w-full`}>
                        <div
                            className={`${mobileMenuOpen ? "show" : "hidden"} sm:hidden fixed h-screen top-0 left-0 bottom-0 w-72 bg-white shadow-md`}
                        >
                            <div className="h-full flex justify-center items-center space-y-5 flex-col">
                                <a
                                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-white focus:text-white hover:bg-primary-blue focus:bg-primary-blue focus:outline-none focus:shadow-outline no-underline text-black"
                                    href="/"
                                >Home</a
                                >
                                <a
                                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-white focus:text-white hover:bg-primary-blue focus:bg-primary-blue focus:outline-none focus:shadow-outline no-underline text-black"
                                    href="/about"
                                >About</a
                                >
                                <a
                                    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-white focus:text-white hover:bg-primary-blue focus:bg-primary-blue focus:outline-none focus:shadow-outline no-underline text-black"
                                    href="/contact"
                                >Contact</a
                                >
                            </div >
                        </div >
                    </div>
                </div >
                <div className="hidden sm:flex justify-evenly items-center space-x-4">
                    <a
                        className="block px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg md:mt-0 transition ease-in duration-300 underline underline-offset-4 hover:underline-offset-8 decoration-primary-blue focus:shadow-outline text-white"
                        href="/"
                    >Home</a
                    >
                    <a
                        className="block px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg md:mt-0 transition ease-in duration-300 underline underline-offset-4 hover:underline-offset-8 decoration-primary-blue focus:shadow-outline text-white"
                        href="/about"
                    >About</a>
                    <a
                        className="block px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg md:mt-0 transition ease-in duration-300 underline underline-offset-4 hover:underline-offset-8 decoration-primary-blue focus:shadow-outline text-white"
                        href="/contact"
                    > Contact</a>
                </div >
            </div >

        </nav >
    );
}