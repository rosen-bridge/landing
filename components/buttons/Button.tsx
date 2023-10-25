import React from "react";

export default function Button({children, disabled=false}: {children: React.ReactNode, disabled?: boolean}) {
    return (
        <button
            className="button-accent"
            disabled={disabled}
        >
            {children}
        </button>
    )
}
