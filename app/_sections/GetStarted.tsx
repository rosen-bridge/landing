import React from "react";
import Button from "../../components/buttons/Button";

export default function GetStarted() {
    return (
        <div className="bg-primary">
            <div className="block text-center pt-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl color-quaternary mb-4">
                    Lorem ipsum dolor
                </h2>
                <p className="text-secondary-dark text-base mb-4 max-w-screen-sm mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button>Get started</Button>
                <div className="w-full border-b border-slate-400 pt-8"/>
            </div>
        </div>
    )
}
