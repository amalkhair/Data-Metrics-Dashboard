import {Link} from "react-router-dom";



const Home = () => {
    return (
        <div className="container">
            <h2 >Welcome!</h2>

             <p className="hometext"> Welcome to the Open Data Metrics Dashboard – your one-stop platform for exploring, analyzing,
                and visualizing datasets from OpenAlex! <br/> Whether you're a researcher, data analyst, or simply curious,
                this dashboard makes it easier than ever to uncover insights about scientific research trends
                across multiple dimensions.<br/>
                Our mission is to simplify complex data and make it accessible for anyone to understand and utilize.
                Dive into global research data and filter it based on license types, time periods, languages,
                research types, and fields of study. <br/>
                With interactive tools and visualizations,
                the Open Data Metrics Dashboard equips you with the knowledge you need to explore the world of science
                and innovation! <br/></p>

            <p className="categoriesText"> Categories of Data You Can Explore:</p>
                <ul id="nav-mobile" className="categoriesLinks">
                   <li><Link to="/by-language">- By Language</Link> : discover datasets grouped by language,
                        highlighting contributions from diverse linguistic communities. </li>
                    <p></p>
                    <li><Link to="/by-license">- By License</Link> : Examine datasets based on their licensing models,
                        from open access to more restrictive options.
                    </li>
                    <p></p>
                    <li><Link to="/by-research-field">- By Research Field</Link> : Explore data based on the type of scholarly work,
                        such as journal articles, books, conference papers, or datasets.
                    </li>
                    <p></p>
                    <li><Link to="/by-type">- By Type</Link> : Explore data based on the type of scholarly work,
                        such as journal articles, books, conference papers, or datasets.</li>
                    <p></p>
                    <li><Link to="/over-time">- Over Time</Link> : Focus on specific research fields, from healthcare and
                        engineering to arts and humanities.</li>
                </ul>
            </div>

    );
};

export default Home;
