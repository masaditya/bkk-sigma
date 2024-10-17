import "./bootstrap";
import "../css/app.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { useEffect } from "react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const AppWithSW = (appProps: any) => {
            useEffect(() => {
                if ("serviceWorker" in navigator) {
                    window.addEventListener("load", () => {
                        navigator.serviceWorker
                            .register("/serviceworker.js")
                            .then((registration) => {
                                console.log(
                                    "Service Worker registered with scope:",
                                    registration.scope
                                );
                            })
                            .catch((error) => {
                                console.log(
                                    "Service Worker registration failed:",
                                    error
                                );
                            });
                    });
                }
            }, []); // Run only once

            return <App {...appProps} />;
        };

        // Conditional render based on environment
        if (import.meta.env.SSR) {
            hydrateRoot(el, <AppWithSW {...props} />);
        } else {
            createRoot(el).render(<AppWithSW {...props} />);
        }
    },
    progress: {
        color: "#4B5563",
    },
});
