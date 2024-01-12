import React from "react";

export default function Footer() {
    return (
        <footer className="bg-primary">
            <div className="block flex flex-col md:flex-row justify-between gap-4 py-4">
                <p className="text-center text-secondary-dark text-sm">
                    © 2023 Rosen Bridge. All rights reserved.
                </p>
                <div className="flex justify-center gap-6">
                    <a href="https://twitter.com/RosenBridge_erg" className="social-link"><i className="uil uil-twitter-alt"/></a>
                    <a href="https://github.com/rosen-bridge" className="social-link"><i className="uil uil-github-alt"/></a>
                    <a href="mailto:team@rosen.tech" className="social-link"><i className="uil uil-envelope"/></a>
                    <a href="https://t.me/rosenbridge_erg" className="social-link"><i className="uil uil-telegram-alt"/></a>
                    <a href="https://discord.gg/AHgsxhDKrQ" className="social-link"><i className="uil uil-discord"/></a>
                </div>
            </div>
        </footer>
    )
}
