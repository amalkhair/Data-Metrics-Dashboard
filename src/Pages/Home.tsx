import {Link} from "react-router-dom";



const Home = () => {
    return (
        <div>

            <h2 >Welcome!</h2>

             <p className="hometext"> Welcome to the Open Data Metrics Dashboard – your one-stop platform for exploring, analyzing,
                and visualizing datasets from OpenAlex! <br/> Whether you're a researcher, data analyst, or simply curious,
                this dashboard makes it easier than ever to uncover insights about scientific research trends
                across multiple dimensions.<br/>

                 <p> Our mission is to simplify complex data and make it accessible for anyone to understand and utilize.
                     Dive into global research data and filter it based on license types, time periods, languages,
                     research types, and fields of study. <br/>
                     With interactive tools and visualizations,
                     the Open Data Metrics Dashboard equips you with the knowledge you need to explore the world of science
                     and innovation! <br/>
                 </p>

             </p>

            <p className="categoriesText"> Categories of Data You Can Explore:</p>
                <ul id="nav-mobile" className="categoriesLinks">
                   <li><Link to="/by-language">&#x2022; By Language</Link> : discover datasets grouped by the top 10 most used languages,
                        highlighting contributions from diverse linguistic communities. </li>
                    <p></p>
                    <li><Link to="/by-license"> &#x2022; By License</Link> : Examine datasets based on their licensing models,
                        from open access to more restrictive options.
                    </li>
                    <p></p>
                    <li><Link to="/by-research-field">&#x2022; By Research Field</Link> : Explore data based on the type of scholarly work,
                        such as journal articles, books, conference papers, or datasets.
                    </li>
                    <p></p>
                    <li><Link to="/by-type">&#x2022; By Type</Link> : Explore data based on the type of scholarly work,
                        such as journal articles, books, conference papers, or datasets.</li>
                    <p></p>
                    <li><Link to="/over-time">&#x2022; Over Time</Link> : Focus on specific research fields, from healthcare and
                        engineering to arts and humanities.</li>
                </ul>
            </div>

    );
};

export default Home;
