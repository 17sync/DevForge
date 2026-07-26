import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-neutral-800">
            {children}
        </button>
    );
}