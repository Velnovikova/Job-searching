import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
type Props = {
    children: React.ReactChild | React.ReactChild[]
}
export default function MainLayout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}