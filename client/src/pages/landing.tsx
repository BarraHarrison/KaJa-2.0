import { Link } from "wouter";

function Landing() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
            <h1 className="text-4xl font-bold text-primary mb-4">KaJa 🚴‍♀️</h1>
            <p className="text-gray-600 mb-8 text-center">
                Welcome to KaJa — your cycling companion for rides, challenges, and community.
            </p>

            <Link
                href="/home"
                className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-teal-600 transition"
            >
                Get Started
            </Link>
        </div>
    );
}

export default Landing;
