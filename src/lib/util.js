import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = () => {
   return twMerge(clsx(inputs));
};