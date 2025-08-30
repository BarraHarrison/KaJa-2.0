import { motion } from "framer-motion";
import StartButton from "@/components/common/StartButton";
import { useLocation } from "wouter";

export default function Landing() {
    const [, setLocation] = useLocation();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-100 to-white text-center px-4">
            <motion.h1
                className="text-5xl font-extrabold text-cyan-600 drop-shadow-md mb-6"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                가자
            </motion.h1>

            <motion.p
                className="text-lg text-gray-600 mb-12 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                함께 달리고, 도전하며, 나의 라이딩을 기록하세요.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <StartButton />
            </motion.div>
        </div>
    );
}
