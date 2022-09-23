import { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = useRef(new QueryClient());
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    if (isSSR) return null;

    return (
        <QueryClientProvider client={queryClient.current}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
