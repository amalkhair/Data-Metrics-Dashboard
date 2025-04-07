
const About = () => {
    return (
        <div className="aboutText">
            <h2>About Us</h2>
            <h5 style={{ fontWeight: 'bold' }}>About This Project</h5>
            <p className="aboutText">

                Welcome to this academic research dashboard! This project was created as part of a
                school assignment where I explored technologies like TypeScript, Vite, React, and Recharts.
                The primary goal was to build a proof of concept to demonstrate how academic research data
                can be visualized and analyzed interactively.


            </p>
            <p className="aboutText">The data you see here is real, sourced from OpenAlex.
                However, please note that the data is not live and might not represent
                the full scope of information available. This project focuses on showcasing
                technical skills and providing a functional prototype, rather than delivering a comprehensive,
                fully accurate academic analysis.
            </p>

            <p className="aboutText">
                This is an early-stage project intended for learning purposes,
            and it serves as a stepping stone for further development and refinement.
            Thank you for exploring!
            </p>
        </div>
    );
};

export default About;
