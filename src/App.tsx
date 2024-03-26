import { Analytics } from "@vercel/analytics/react";
import Home from "./Home";
import { inject } from "@vercel/analytics";

function App() {
    inject();
    return (
        <div className="w-full overflow-x-hidden">
            <Home />
            <Analytics />
        </div>
    );
}

export default App;
