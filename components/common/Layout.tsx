import React from "react";
import Head from "next/head";
import { siteName } from "../../utils/constants";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    title?: string;
    meta?: string;
    children: React.ReactNode;
}

function Layout({ title, meta, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title ? `${title} - ${siteName}` : siteName}</title>
                <meta name="description" content={meta} />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
