import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Layout() {
    return (
        <>
            <Header />
            <main className=" pt-3">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}