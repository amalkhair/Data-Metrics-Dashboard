import PieChartLanguages from "../../components/PieChart-languages.tsx";

const ByLanguage = () => {
    return (
        <div >
            <h4 style={{fontWeight: 'bold', textAlign: 'justify'}}> Top 10 Publications by Language</h4>

            <p className="languageIntroText">
                This section allows you to explore datasets of publications, categorized by the 10 most
                used languages in research.  <br/> By analyzing datasets in different languages, we can identify global
                trends in academic contributions. <br/>
                Research outputs vary by region, and understanding these  patterns helps highlight
                the diverse perspectives in scholarly work.</p>

            <p style={{ fontWeight: 'bold' }}>Chart : Academic Publications categorized by language</p>


            <PieChartLanguages />

            <p className= "ChartsInsightsText">
                <p style={{ fontWeight: 'bold' }}>Chart Insights</p>

                The pie chart above displays the distribution of research datasets across the top ten most
                widely used languages in academic research.<br/> From the chart, you can observe the following:


            </p>

            <p className="languageListExplanationText" >

                &#x2022; English holds the largest portion, representing the majority of datasets.
                        This dominance is consistent with the global use of English in academic publishing. <br/>
                <p></p>
                &#x2022; German takes the second position, contributing a significant share of the datasets. <br/>
                <p></p>
                &#x2022; Spanish, Japanese, and French follow, each contributing notable,
                but smaller portions compared to English and German. <br/>
                <p></p>
                &#x2022; Korean, Portuguese, Russian, Italian, and Indonesian occupy the remaining portions
                of the chart, with each language representing a smaller share of the total datasets.<br/>

                <p>
                This distribution shows how various languages contribute to the body of academic research,
                with English being the most prevalent,
                followed by other key languages in specific academic fields.
                </p>

                <p>
                    The data reflects the ongoing collaboration between different linguistic communities,
                    revealing which languages dominate certain research fields and how these contributions
                    are shared across the world.
                </p>



            </p>


        </div>
    );
};

export default ByLanguage;
