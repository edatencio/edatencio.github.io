import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Timeline from "./Timeline";
import Summary from "./Summary";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import ScrollToTop from "./ScrollToTop";

import ExperienceData from "../data/ExperienceData";
import EducationData from "../data/EducationData";

const App = () =>
{
    return (
        <div>
            <Navbar />
            <Header />
            <Portfolio />
            <Timeline label="Experience" data={ExperienceData} />
            <Timeline label="Education" data={EducationData} />
            {/* <Timeline label="Education" /> */}
            <Summary />
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
