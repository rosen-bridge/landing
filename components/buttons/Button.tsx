import React from "react";

export default function Button({children}) {
    return (
        <button
            className="px-8 py-2 bg-accent text-slate-100 hover:text-white uppercase rounded-full shadow-lg hover:shadow-xl"
        >
            {children}
        </button>
    )
}
