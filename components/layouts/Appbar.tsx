"use client"
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../buttons/Button";

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
                "fixed top-0 w-full z-30 bg-white transition-all " +
                (scrollActive ? " shadow-md pt-0" : " pt-4")
            }
        >
            <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
                <div className="col-start-1 col-end-2 flex items-center">
                    <img src="./vercel.svg" className="h-8 w-auto" />
                </div>
                <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center nav navbar-nav">
                    <NavLink to="guard-set">Guard set</NavLink>
                    <NavLink to="architecture">Architecture</NavLink>
                    <NavLink to="tokenomics">Tokenomics</NavLink>
                    <NavLink to="road-map">Road Map</NavLink>
                </ul>
                <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                    <ButtonOutline>Get started</ButtonOutline>
                </div>
            </nav>
        </header>
    );
};
