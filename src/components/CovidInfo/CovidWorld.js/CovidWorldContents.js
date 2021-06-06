import { Paper } from "@material-ui/core";

export const WorldPaperInformation = ({ WorldPaperContents }) => {
  return (
    <>
      {WorldPaperContents.map((WorldPaperContent, index) => {
        const { paperTitle, paperAnswer } = WorldPaperContent;
        return (
          <>
            <Paper className="world_head_paper" key={index}>
              <h3 className="paper_title">{paperTitle}</h3>
              <p className="count">{paperAnswer}</p>
            </Paper>
          </>
        );
      })}
    </>
  );
};

export const ContinentPaperInformation = ({ dataByContinent }) => {
  return (
    <>
      <div className="continents_head">
        {dataByContinent.map((data, index) => {
          const { continent, active, critical, cases, deaths, recovered } =
            data;
          return (
            <>
              <Paper className="world_head_paper" key={index}>
                <h3 className="paper_title">{continent}</h3>
                <p className="count">
                  <span className="count_heading">Active</span>
                  {active}
                </p>
                <p className="count">
                  <span className="count_heading">Cases</span>
                  {cases}
                </p>
                <p className="count">
                  <span className="count_heading">critical</span>
                  {critical}
                </p>
                <p className="count">
                  <span className="count_heading">deaths</span>
                  {deaths}
                </p>
                <p className="count">
                  <span className="count_heading">recovered</span>
                  {recovered}
                </p>
              </Paper>
            </>
          );
        })}
      </div>
    </>
  );
};
