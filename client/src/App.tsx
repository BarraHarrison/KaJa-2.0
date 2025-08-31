import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

// Pages
import Landing from "./pages/landing";
import Home from "./pages/home";
// Later: import Challenges from "./pages/challenges";
// Later: import Profile from "./pages/profile";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Switch>
                {/* Landing page (default route) */}
                <Route path="/" component={Landing} />

                {/* Feed page */}
                <Route path="/home" component={Home} />

                {/* Future routes */}
                {/* <Route path="/challenges" component={Challenges} /> */}
                {/* <Route path="/profile" component={Profile} /> */}
            </Switch>
        </QueryClientProvider>
    );
}

export default App;
