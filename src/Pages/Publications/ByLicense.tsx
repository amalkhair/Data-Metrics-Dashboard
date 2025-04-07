import PieChartLicense from "../../components/PieChart-license.tsx";

const ByLicense = () => {
    return (
        <div >
            <h4 style={{fontWeight: 'bold', textAlign: 'left'}}>Most used licences in academic publications</h4>

            <p className="LicenseIntroText"> This section explores the types of licenses used in research datasets. <br/>
                Licensing determines how data can be accessed, used, and shared. <br/>
                It and it plays an important role in the open science movement. <br/>
                By analyzing the types of licenses applied to datasets,
                we gain insight into how openly research is being shared and which permissions
                are most common in the academic community.<br/>
            </p>

            <p style={{ fontWeight: 'bold' }}>Chart : Academic Publications categorized by license type</p>

            <PieChartLicense />

            <p className= "ChartsExplanationLicense">
                <h5 style={{ fontWeight: 'bold' }}> Academic Research Licenses</h5>

                The chart above displays the distribution of research datasets by license type. <b/>
                Each license defines the permissions and limitations for how a dataset can be reused or redistributed.
                From the chart, you can observe the following:
               <b/>

                <p>
                    CC BY appears most frequently, showing it is the preferred license for sharing data with proper attribution.
                    Other common Creative Commons licenses in the dataset include CC BY-NC-ND, CC BY-NC, and CC BY-NC-SA, which include additional restrictions such as non-commercial use or no derivatives.
                    A notable share is labeled as other open access, which includes less common or hybrid licenses that still fall under the open access umbrella.
                    Publisher-specific open access licenses also appear, indicating custom terms provided by certain publishers or institutions.
                    Some datasets are in the public domain (CC0), which allows anyone to use them freely without any conditions.
                    Software-specific licenses like MIT, GNU GPLv3, Apache 2.0, and ISC License are used for datasets that include code or software components.


                </p>

            </p>

            <h5 style={{ fontWeight: 'bold', textAlign: 'justify' }}> About the licenses </h5>
            <p className="ChartsExplanationLicense">

                <p style={{ fontWeight: 'bold' }}> Creative Commons (CC) Licenses</p>

                &#x2022; Creative Commons Attribution (CC BY):<br/>
                Allows use, sharing, and adaptation for any purpose, including commercial,
                with credit to the original creator.
                <p></p>
                &#x2022; Creative Commons Zero (CC0):<br/>
                Places the work in the public domain, allowing unrestricted use
                without the need for attribution.
                <br/>
                <p></p>
                &#x2022; Creative Commons Attribution-NonCommercial-NoDerivatives (CC BY-NC-ND): <br/>
                Permits sharing with attribution, but restricts commercial use and prohibits modifications
                or adaptations.
                <br/>
                <p></p>
                &#x2022; Creative Commons Attribution-NonCommercial (CC BY-NC):<br/>
                Allows reuse and adaptation for non-commercial purposes only, with required attribution.
                <br/>
                <p></p>
                &#x2022; Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA): <br/>
                Supports non-commercial reuse and modification with attribution,
                but requires new works to be licensed under identical terms.
                <br/>

                <p style={{ fontWeight: 'bold' }}>Open Source Software Licenses</p>
                &#x2022; Massachusetts Institute of Technology License (MIT License): <br/>
                A permissive license that enables free use, modification, and distribution,
                provided the license and attribution are included. <br/>
                <p></p>
                &#x2022; GNU General Public License v3.0 (GPLv3):<br/>
                Ensures that software and any derivative works remain open
                source and licensed under the same terms. <br/>
                <p></p>
                &#x2022; Apache License, Version 2.0 (Apache 2.0): <br/>
                Permits wide reuse, including in proprietary software,
                and includes protections related to patents.
                <p></p>
                &#x2022; Internet Systems Consortium License (ISC License):<br/>
                A minimalist and permissive license similar to MIT,
                allowing almost unrestricted use with basic attribution.

                <p style={{ fontWeight: 'bold' }}>Publisher Specific Open Access License</p>
                &#x2022; Publisher-Specific Open Access Licenses: <br/>
                Custom terms defined by publishers that may vary in reuse rights,
                often based on combinations of Creative Commons or proprietary conditions.

                <p>
                    This license distribution gives a clear picture of how research datasets are shared across the academic world. <br/>
                    Most datasets are openly licensed, with varying levels of permission and restriction depending on the license type. <br/>
                    The presence of both general open access and software-specific licenses reflects the diversity of research outputs,
                    from traditional data to code-driven work. <br/>
                    This insight helps us better understand the openness, accessibility, and reuse potential of academic data.
                </p>

            </p>








        </div>
    );
};

export default ByLicense;
