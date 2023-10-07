import React from "react";

export default function Heading({title, subtitle, description, align="center", maxWidth="md"}) {
    return (
        <div className={`block max-w-screen-${maxWidth} mb-6 pt-12`}>
            {subtitle && (
                <h2 className="text-sm text-center color-tertiary uppercase">{subtitle}</h2>
            )}
            <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold color-primary leading-relaxed text-${align}`}
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
