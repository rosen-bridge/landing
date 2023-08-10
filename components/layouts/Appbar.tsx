"use client"
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({to, offset=-60, children}) => {
    return (
        <li>
            <LinkScroll
                className="nav-link"
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                duration={1000}
                offset={offset}
            >
                {children}
            </LinkScroll>
        </li>
    )
}

export default function Appbar() {
    const [scrollActive, setScrollActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);

    return (
        <header
            className={
                "fixed top-0 w-full z-30 transition-all " +
                (scrollActive ? " shadow-md bg-glass backdrop-blur pt-0" : " pt-4")
            }
        >
            <nav className="container mx-auto flex px-8 py-2">
                <div className="flex gap-4 items-center">
                    <img src="./assets/logo/rosen-logo.svg" className="h-12 w-auto" alt=""/>
                    <img src="./assets/logo/rosen-typo-h.svg" className="h-4 w-auto" alt="ROSEN BRIDGE"/>
                </div>
                <ul className="hidden md:flex grow justify-center items-center">
                    <NavLink to="guard-set">Guard set</NavLink>
                    <NavLink to="architecture">Architecture</NavLink>
                    <NavLink to="tokenomics">Tokenomics</NavLink>
                    <NavLink to="road-map">Road Map</NavLink>
                </ul>
            </nav>
        </header>
    );
};
