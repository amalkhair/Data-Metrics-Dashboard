import BarChartResearchField from "../../components/BarChart-research-field.tsx";

const ByResearchField = () => {
    return (
        <div >
            <h4 style={{fontWeight: 'bold', textAlign: 'justify'}}>Top 5 Academic Research Fields</h4>

            <p className="ResearchFieldIntroText"> This barchart explores academic publications across major research fields,
                highlighting the top five research fields. Each field is evaluated based on two key metrics:
                works count (total number of publications) and cited by count (total citations received).
                Together, these metrics offer insight into both the productivity and impact of each discipline within the academic landscape.
            </p>

            <p style={{ fontWeight: 'bold' }}>Barchart : Academic Publications categorized by top 5 research fields</p>

            <div>

                <BarChartResearchField/>

            </div>

            <h5 style={{ fontWeight: 'bold', textAlign: 'left' }}> Key Metrics</h5>

            <p className= "ChartsExplanationLicense">


                Each research field is also associated with two key indicators:
                <b/>

                <p>
                    &#x2022; Works Count: Total number of publications attributed to the field.

                    <p></p>

                    &#x2022; Cited By Count: Total number of citations these publications have received from other
                    academic works, which helps measure their academic influence.

                </p>

            </p>

            <h5 style={{ fontWeight: 'bold', textAlign: 'justify' }}> Chart Overview</h5>

            <p className="ChartsExplanationLicense">
                The chart above highlights the top five research fields with the highest number of academic publications:

                <ul>
                    <li>
                &#x2022; Medicine leads in publication volume,
                reflecting its vital role in diagnosing, treating, and preventing disease.
                Its high citation count also signals strong influence across disciplines .
                    </li>

                    <br/>

                    <li>
                    &#x2022; Social Sciences include sociology, economics, and political science.
                    With wide-ranging topics and societal relevance,
                    this field contributes significantly to overall research output.
                    </li>

                    <br/>

                    <li>
                    &#x2022; Engineering emphasizes innovation and practical application in areas like infrastructure,
                        technology, and healthcare. Its high output underscores its importance in driving modern advancements.

                    </li>

                    <br/>

                    <li>
                    &#x2022; Arts and Humanities focus on culture, history, and human expression.
                    While often qualitative, the field produces substantial scholarly work that enriches our
                    understanding of society.
                    </li>

                    <br/>

                    <li>
                        &#x2022;  Computer Science spans algorithms, AI, data science, and computing.
                        Its fast-growing publication volume reflects the rising demand
                        for digital and computational solutions across industries.
                    </li>

                </ul>

                <p>
                    By examining publication trends across key research fields,
                    we gain a clearer view of where academic efforts are concentrated and how
                    each discipline contributes to the broader knowledge ecosystem.
                    These insights help track the evolution
                    of research priorities and the growing impact of interdisciplinary work.
                </p>

            </p>


        </div>
    );
};

export default ByResearchField;
