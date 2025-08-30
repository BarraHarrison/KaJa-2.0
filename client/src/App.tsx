import { Switch, Route, Link } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Home from "./pages/home";
import Challenge from "./pages/challenge";
import Groups from "./pages/groups";
import Profile from "./pages/profile";
import Landing from "./pages/landing";

import BottomNavigation from "./components/BottomNavigation";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen flex flex-col bg-gray-50">
                {/* Main Content */}
                <div className="flex-1">
                    <Switch>
                        <Route path="/" component={Landing} />
                        <Route path="/home" component={Home} />
                        <Route path="/challenges" component={Challenge} />
                        <Route path="/groups" component={Groups} />
                        <Route path="/profile" component={Profile} />
                        <Route>
                            {/* 404 fallback */}
                            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                                <h1 className="text-2xl font-bold text-red-500">404</h1>
                                <p className="text-gray-600">Page not found.</p>
                                <Link href="/home" className="text-blue-500 underline mt-4">
                                    Go Home
                                </Link>
                            </div>
                        </Route>
                    </Switch>
                </div>

                {/* Bottom Navigation */}
                <BottomNavigation />
            </div>
        </QueryClientProvider>
    );
}

export default App;
