import React from "react";

interface ArrowNavProps {
    children: React.ReactNode;
    [x: string]: any;
}

function ArrowNav({ children, ...props }: ArrowNavProps) {
    return (
        <button
            className="absolute top-0 bottom-0 z-10 m-auto h-[20%] px-2 text-[30px] font-bold text-white"
            {...props}
        >
            {children}
        </button>
    );
}

export default ArrowNav;
