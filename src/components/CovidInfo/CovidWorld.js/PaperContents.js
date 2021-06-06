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

export const ContinentPaperInformation = ({ ContinentsPaperContent }) => {
  return <>hellow</>;
};
