import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [isDarkMode]);

    const toggleTheme = () => {
      setIsDarkMode((prev) => !prev);
    };
    return(
        <button onClick={toggleTheme}>
            {" "}
            {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-300"/> 
            ) : ( 
            <Moon className="w-6 h-6 text-blue-900"/>
            )}
        </button>
    );
};