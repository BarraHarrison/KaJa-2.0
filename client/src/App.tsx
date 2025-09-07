import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Landing from "./pages/landing";
import Home from "./pages/home";
// Later: import Challenges from "./pages/challenges";
// Later: import Groups from "./pages/groups";
// Later: import Profile from "./pages/profile";

import BottomNavigation from "./components/common/BottomNavigation";

function App() {
    const [location] = useLocation();
    const showBottomNav = ["/feed", "/challenges", "/groups", "/profile"].includes(location);

    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen pb-16">
                <Switch>
                    <Route path="/" component={Landing} />
                    <Route path="/feed" component={Home} />

                    {/* Future routes */}
                    {/* <Route path="/challenges" component={Challenges} /> */}
                    {/* <Route path="/groups" component={Groups} /> */}
                    {/* <Route path="/profile" component={Profile} /> */}
                </Switch>

                {showBottomNav && <BottomNavigation />}
            </div>
        </QueryClientProvider>
    );
}

export default App;
