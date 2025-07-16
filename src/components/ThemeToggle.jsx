import { useState } from "react";
import { Moon, Sun } from "lucide-react";
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
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