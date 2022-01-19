import { useEffect } from "react";

const useOnClickOutside = (ref: any, callback : () => void) => {
    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (ref.current && !ref.current.contains(target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    });
};

export default useOnClickOutside;