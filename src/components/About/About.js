import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [contributors, setContributors] = useState([]);

  const getContributors = async () => {
    fetch(
      "https://api.github.com/repos/stephin007/Cowin-Vaccine-Availablity-Checker/contributors"
    )
      .then((response) => response.json())
      .then((data) => {
        setContributors(data);
        console.log(data);
      });
  };

  useEffect(() => {
    getContributors();
  }, []);

  return (
    <>
      <div className="about-container">
        <div className="about-head">
          <h1>About Cowin Vaccine Availability Checker</h1>
        </div>
        <hr />
        <br />
        <div className="about_section">
          <div className="about_section_left">
            <h4>
              App to checkout the latest COVID19 Vaccination Slots Across
              India🎨.
            </h4>
          </div>
          <div className="about_section_right">
            <div className="contributor_text">
              <h3>CONTRIBUTORS</h3>
              {/* {contributors.map((contributor) => {
                const { contributions } = contributor;
                return <p>{contributions}</p>;
              })} */}
            </div>
            <div className="contributors_block">
              <div className="contributor_individual">
                <div className="contributor_image">
                  <img
                    src="https://avatars.githubusercontent.com/u/54792119?v=4"
                    alt="contributor avatar"
                  />
                </div>
                <div className="contributor_detail">
                  <a href="https://github.com/stephin007">Stephin007</a>
                  <div className="contribution_count">
                    <p>No of Contributions : </p>
                    <strong>87</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
