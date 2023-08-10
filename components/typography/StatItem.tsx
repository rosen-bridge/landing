import React from "react";

function format(value) {
    if (value >= 1e6) return value/1e6 + "M"
    if (value >= 1e3) return value/1e3 + "k"
    return value
}

export default function StatItem({label, value, hidePlus=false}) {
    return (
        <div>
            <div className="text-2xl font-bold capitalize">
                {format(value)}
                {!hidePlus && <span className="color-accent">+</span>}
            </div>
            <div className="text-base text-secondary">{label}</div>
        </div>
    )
}
