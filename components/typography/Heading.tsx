import React from "react";

export default function Heading({title, description}) {
    return (
        <div className="container max-w-screen-md">
            <h2
                className="mt-12 text-2xl sm:text-3xl lg:text-4xl font-bold color-primary leading-relaxed text-center"
            >
                {title}
            </h2>
            {description && (
                <p className="mt-4 mb-6 text-secondary text-center text-base">
                    {description}
                </p>
            )}
        </div>
    )
}
