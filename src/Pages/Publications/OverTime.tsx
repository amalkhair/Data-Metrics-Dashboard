import LineChartComponent from "../../components/LineChart-by-year.tsx";

const OverTime = () => {
    return (
        <div>
            <h4 style={{fontWeight: 'bold', textAlign: 'justify'}}>Research Overview for 1700-1710</h4>

            <p className="overTimeExplanation">The line graph below visualizes the
                distribution and changes in publication volume across the decade.
                It offers a clear representation of the academic activity during this period,
                showing trends in the number of publications year by year.
            </p>

            <p style={{ fontWeight: 'bold' }}>Line Graph: Academic Publications from 1700-1710</p>

            <div>
                <LineChartComponent/>
            </div>



            <p className="overTimeExplanation">This dataset tracks the amount of academic publications from 1700 to 1710,
                offering insights into the volume of research produced during this period.
                By examining the publication trends over this decade,
                researchers can gain a better understanding of how
                academic output evolved during these early years of the 18th century.
                The data provides valuable context for studying the progression of various research fields,
                highlighting the starting points of key academic developments and offering a historical reference
                for comparisons with later periods. This dataset may serve as a foundation for further
                research into scholarly trends,
                helping researchers identify patterns or shifts in academic focus during the early 1700s.
            </p>

            <p className="overTimeExplanation">
                Understanding the academic research output during 1700-1710 helps contextualize early
                scholarly work and provides insights into how research practices have evolved over time.
                By studying these early years, researchers can observe the foundational shifts in academic
                focus and methodologies that influenced subsequent developments in various fields.
            </p>



        </div>
    );
};

export default OverTime;
