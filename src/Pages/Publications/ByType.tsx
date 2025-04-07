import BarChartType from "../../components/BarChart-type.tsx";

const ByType = () => {
    return (
        <div >
            <h4 style={{fontWeight: 'bold', textAlign: 'justify'}}>Top 10 Publication Types in Academic Research</h4>
            <p style={{fontWeight:'bold',  textAlign: 'left'}}>Publications by Research Type </p>
            <p className="researchTypeText">This barchart shows different types of
                research outputs found in academic literature.
                Research types indicate the format and purpose of
                a scholarly work—whether it's presenting new findings, reviewing existing knowledge, or sharing educational material.
                By analyzing the distribution of publication types,
                we can better understand how research is communicated and the roles each format
                plays in the academic ecosystem.
            </p>

            <p style={{ fontWeight: 'bold' }}>Barchart : Academic Publications Categorized by top 10 Publication Types
            </p>

            <div>
            <BarChartType/>
            </div>

            <h5 style={{ fontWeight: 'bold', textAlign: 'justify' }}> Chart Overview</h5>

            <p style={{ fontWeight: 'bold' , textAlign: 'left' }}>
                The chart above highlights the ten most common types of research publications:
            </p>

            <p className="researchTypeText">

                <ul>
                    <li>
                        &#x2022; Article is the most common research type, typically peer-reviewed and published in academic journals.
                        Articles present original research findings, methodologies, and analyses, and are the primary format for disseminating scientific knowledge across disciplines.
                    </li>

                    <br/>

                    <li>
                        &#x2022; Book Chapter refers to a contribution within an edited academic book, often focusing on a specific topic or area within a broader subject.
                        It’s widely used in fields like social sciences and humanities to provide detailed discussions and critical insights on particular aspects of a subject.
                    </li>

                    <br/>

                    <li>
                        &#x2022; Datasets consist of organized collections of research data, made publicly available to support transparency, replication, and further analysis.
                        Datasets enable researchers to validate results, conduct secondary analysis, and advance open science practices.
                    </li>

                    <br/>

                    <li>
                        &#x2022; Preprint is a version of a research paper made available before peer review, allowing for rapid dissemination and feedback from the academic community.
                        Preprints are common in fast-paced fields like medicine, physics, and computer science, where timely information is crucial.
                    </li>

                    <br/>

                    <li>
                        &#x2022; Dissertation is a comprehensive research project completed as part of graduate degree requirements, usually focusing on a narrow topic within a specific discipline.
                        Dissertations represent original contributions to knowledge and are essential for advancing early-career scholarship.
                    </li>

                    <br/>

                    <li>
                        &#x2022; Book refers to full-length scholarly texts, often exploring a particular topic in-depth over multiple chapters.
                        Books are significant in disciplines like literature, history, and philosophy, offering comprehensive overviews and detailed explorations of research areas.
                    </li>

                    <br/>

                    <li>
                        &#x2022; Review articles provide a summary and critical evaluation of existing research on a specific topic or area.
                        Reviews synthesize large amounts of information and are essential for guiding future research and highlighting gaps in knowledge.
                    </li>

                    <br/>

                    <li>
                        &#x2022; Paratext includes supplementary materials such as abstracts, introductions, bibliographies, and appendices that accompany the main text.
                        These components help contextualize and clarify the primary research, offering additional insights or framing for the core findings.
                    </li>

                    <br/>

                    <li>
                        &#x2022; LibGuide refers to curated research guides, typically developed by librarians, to assist with information discovery and research navigation.
                        LibGuides are often used in academic libraries to provide students and researchers with access to relevant resources, databases, and research tips.
                    </li>

                    <br/>

                    <li>
                        &#x2022; Letter is a brief communication, often used to present preliminary findings, respond to previously published work, or offer concise insights.
                        Letters are common in scientific and medical journals, where they serve as a quick way to share updates or engage in scholarly discussions.
                    </li>
                </ul>
            </p>

            <p className='researchTypeText'>
                Understanding the types of research outputs gives us a clearer
                picture of how knowledge is created, shared, and consumed in academia.
                From in-depth dissertations to concise letters,
                each type plays a unique role in advancing scholarly
                communication and shaping the flow of academic dialogue.

            </p>


        </div>
    );
};

export default ByType;
