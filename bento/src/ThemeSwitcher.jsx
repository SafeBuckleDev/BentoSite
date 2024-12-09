import { useEffect, useState } from "react";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); // State to control animation class

    const UpdateTheme = (theme) => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.style.setProperty('--textColor', '#e5e2eb');
            root.style.setProperty('--gridColor', '#2e3138');
            root.style.setProperty('--gridInnerColor', 'rgba(38,40,47,1)');
            root.style.setProperty('--textGradient', 'linear-gradient(45deg, var(--textGradientColor1), var(--textGradientColor2), var(--textGradientColor3))');
            root.style.setProperty('--textGradientColor1', '#3c42c4');
            root.style.setProperty('--textGradientColor2', '#ce79d2');
            root.style.setProperty('--textGradientColor3', '#f4dfbe');
            root.style.setProperty('--backgroundGradient', 'radial-gradient(circle, rgba(38,40,47,1) 0%, rgba(0,0,0,1) 100%)');
        } else {
            root.style.setProperty('--textColor', '#2e3138');
            root.style.setProperty('--gridColor', '#fff');
            root.style.setProperty('--gridInnerColor', '#d6d6e7')
            root.style.setProperty('--backgroundGradient', 'linear-gradient(169deg, rgba(255,255,255,1) 0%, rgba(248,235,254,1) 37%, rgba(220,248,255,1) 100%)');
        }
    }

    const ToggleTheme = () => {
        setIsAnimating(true);  // Trigger animation
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            UpdateTheme(newMode ? 'dark' : 'light');
            return newMode;
        });
    }

    // Reset the animation after it finishes
    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500); // Duration of the animation (should match the CSS animation time)
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    useEffect(() => {
        UpdateTheme(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <div className="Switcher">
            <button 
                onClick={ToggleTheme} 
                className={isAnimating ? 'animate' : ''} // Apply animation class when isAnimating is true
            >
                <FontAwesomeIcon className="icon" icon={isDarkMode ? faMoon : faSun} mask={faSquareFull} />
            </button>
        </div>
    );
}

export default ThemeSwitcher;
