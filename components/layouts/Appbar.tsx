"use client"
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

const links = [
    {
        to: "guard-set",
        label: "Guard Set",
    },{
        to: "features",
        label: "Features",
    },{
        to: "architecture",
        label: "Architecture",
    },{
        to: "watchers",
        label: "Watchers",
    },{
        to: "tokenomics",
        label: "Tokenomics",
    },{
        to: "road-map",
        label: "Road Map",
    }
]

export default function Appbar() {
    const [scrollActive, setScrollActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(prevState => !prevState)
    const closeMenu = () => setShowMenu(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);

    return (
        <header
            className={
                "fixed top-0 w-full z-30 transition duration-300	 " +
                ((scrollActive || showMenu) ? " shadow-md bg-glass backdrop-blur" : " ") +
                (scrollActive ? " pt-0" : " pt-4")
            }
        >
            <nav className="block flex px-8 py-2">
                <div className="flex gap-4 items-center">
                    <img src="./assets/logo/rosen-logo.svg" className="h-12 w-auto" alt=""/>
                    <img src="./assets/logo/rosen-typo-h.svg" className="h-4 w-auto" alt="ROSEN BRIDGE"/>
                </div>
                <ul className="hidden xl:flex grow justify-end items-center">
                    {links.map((item,index) => (
                        <li key={index} >
                            <LinkScroll
                                className="nav-link"
                                activeClass="active"
                                to={item.to}
                                offset={-60}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </LinkScroll>
                        </li>
                    ))}
                </ul>
                <div className="flex xl:hidden grow justify-end items-center">
                    <button onClick={toggleMenu} className="text-2xl border rounded px-2 py-1 text-secondary">
                        <i className={`uil uil-${showMenu ? "multiply" : "bars"} `}/>
                    </button>
                </div>
            </nav>
            <div className={`${showMenu ? "block" : "hidden"} `}>
                <ul className="sm:flex mb-2">
                    {links.map((item,index) => (
                        <li key={index} >
                                <LinkScroll
                                className="nav-link"
                                activeClass="active"
                                to={item.to}
                                offset={-60}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </LinkScroll>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
