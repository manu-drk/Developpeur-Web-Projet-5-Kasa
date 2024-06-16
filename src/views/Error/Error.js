import React from "react";
import Notfound from "../../components/notfound/Notfound";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Error = () => {
    return (
        <>
            <div className="Error">
                <Header />
                <main>
                    <Notfound />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Error;