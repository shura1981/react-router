import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <>
            <Header />
            <main style={{ marginTop: "58px" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}