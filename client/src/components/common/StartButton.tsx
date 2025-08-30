import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface StartButtonProps {
    label?: string;
    href?: string;
    onClick?: () => void;
}

export default function StartButton({ label = "시작하기", href = "/feed", onClick }: StartButtonProps) {
    const [, setLocation] = useLocation();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            setLocation(href);
        }
    };

    return (
        <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-xl px-10 py-6 rounded-2xl shadow-lg"
            onClick={handleClick}
        >
            🚴 {label}
        </Button>
    );
}
