import React from "react";

export default function Heading({title, description, align="center", maxWidth="md"}) {
    return (
        <div className={`block max-w-screen-${maxWidth} mb-6`}>
            <h2
                className={`mt-12 text-2xl sm:text-3xl lg:text-4xl font-bold color-primary leading-relaxed text-${align}`}
            >
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-secondary text-center text-base">
                    {description}
                </p>
            )}
        </div>
    )
}
