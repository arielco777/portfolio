import { Analytics } from "@vercel/analytics/react";
import Home from "./Home";

function App() {
    return (
        <div className="w-full overflow-x-hidden">
            <Home />
            <Analytics />
        </div>
    );
}

export default App;
