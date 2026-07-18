import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>

        <App />

        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                duration: 2500,
                style: {
                    background: "#0f172a",
                    color: "#fff",
                    border: "1px solid #1e293b",
                    borderRadius: "12px",
                },
            }}
        />

    </StrictMode>
);