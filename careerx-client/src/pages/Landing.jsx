import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/css/wrappers/LandingPage";
import photo from "../assets/img/LandingPage/hero.png";
import Brands from "../components/Home Page/Brands";
import HowWorks from "../components/Home Page/HowWorks";
import PopularCategory from "../components/Home Page/PopularCategory";
import Team from "../components/Home Page/Team";
import Testimonial from "../components/Home Page/Testimonial";
import Navbar from "../components/shared/Navbar";

const Landing = () => {
    const navbarRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    }, []);
    return (
        <>
            <Navbar navbarRef={navbarRef} />
            <Wrapper ref={heroRef}>
                <div className="hero-content">
                    <div className="text-content">
                        <h1>
                            Get The Most <span className="fancy">Reliabale Job </span> 
                            Today!
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Illo perferendis dignissimos eligendi voluptas
                            exercitationem, eius aut mollitia quasi nisi
                            voluptatem similique, tempore totam, odit
                            repellendus non. Dolores eos animi recusandae.
                        </p>
                        <div className="btn-grp">
                            <Link className="btn" to="/all-jobs">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="placeholder">
                        <img src={photo} alt="job viva photo" />
                    </div>
                </div>
            </Wrapper>
            <div>
            <PopularCategory/>
            <HowWorks/>
            <Team/>
            <Testimonial/>
            <Brands/>
            </div>
        </>
    );
};

export default Landing;
