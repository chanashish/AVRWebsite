"use client"
import { VegetarianLogoIcon } from "@/icons/icons";
import { useEffect, useState } from "react";

const StickyLogo = () => {
    // on scroll function to change color

    const [color, setColor] = useState(false);
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 210) {
                setColor(true);
            } else {
                setColor(false);
            }
        };
        window.addEventListener("scroll", changeColor);
    })
    return (
        <div className={`logo ${color ? "text-clr" : "text-white"} duration-300 transition-colors ease-in-out fixed top-1/2 right-4 z-50`}>
            <VegetarianLogoIcon/>
        </div>
    );
}

export default StickyLogo;