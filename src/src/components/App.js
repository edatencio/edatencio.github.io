import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Timeline from "./Timeline";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import ScrollToTop from "./ScrollToTop";

const App = () =>
{
    return (
        <div>
            <Navbar />
            <Header />
            <Portfolio />
            <Timeline label="Experience" />
            <Timeline label="Education" />
            <About />
            {/* <Contact /> */}
            {/* <Footer /> */}
            <Copyright />
            <ScrollToTop />
            {/* <div>Header</div> */}
            {/* <div>Portfolio</div> */}
            {/* <div>Experience</div> */}
            {/* <div>Education</div> */}
            {/* <div>Summary</div> */}
        </div>
    );
}

export default App;
