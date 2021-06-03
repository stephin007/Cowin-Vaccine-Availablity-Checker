import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [contributors, setContributors] = useState([]);
  const [contributorCount, setContributorCount] = useState(0);

  const getContributors = async () => {
    fetch(
      "https://api.github.com/repos/stephin007/Cowin-Vaccine-Availablity-Checker/contributors"
    )
      .then((response) => response.json())
      .then((data) => {
        setContributors(data);
        console.log(data);
        setContributorCount(data.length);
        console.log(data.length);
      });
  };

  useEffect(() => {
    getContributors();
  }, []);

  return (
    <>
      <div className="about-container">
        <div className="about-head">
          <h1>About the App</h1>
        </div>
        <hr />
        <br />
        <div className="about_section">
          <div className="about_section_left">
            <div className="about_section_main_heading">
              <h4>
                App to checkout the latest COVID19 Vaccination Slots Across
                India🎨.
              </h4>
            </div>
            <br />
            <div className="about_section_subheadings">
              <h3>Details about the vaccine that you will find here</h3>
              <ul>
                <li>Name of the Vaccine</li>
                <li>Whether paid or free</li>
              </ul>
              <h3>Highlight features of the app</h3>
              <ul>
                <li> No more OTP!</li>
                <li>
                  You can check for slots before hand and book your slot on the
                  Aarogya Setu App accordingly
                </li>
                <li>
                  You can check for slots across all districts of India, even
                  using postal codes
                </li>
                <li> Details about free and paid vaccines is also available</li>
                <li>
                  Fully open sourced information made on the latest technology
                  stack
                </li>
                <li> We also have a feature of Map*</li>
              </ul>
              <p>
                *This feature is in Beta Version, proper coordinates may not be
                available. Also this feature is only available in the desktop
                version
              </p>
              <h3>What’s Next?</h3>
              <ul>
                <li>
                  Notification feature to give you real time alerts when slots
                  are available
                </li>
              </ul>
            </div>
          </div>
          <div className="about_section_right">
            <div className="contributor_text">
              <h3>CONTRIBUTORS{contributorCount}</h3>
            </div>
            {contributors.map((contributor) => {
              const { contributions, avatar_url, login, type, html_url } =
                contributor;
              return (
                <div className="contributors_block">
                  <div className="contributor_individual">
                    <div className="contributor_image">
                      <img src={avatar_url} alt="contributor avatar" />
                    </div>
                    <div className="contributor_detail">
                      <a href={html_url}>{login}</a>
                      <div className="contribution_count">
                        <p>No of Contributions : </p>
                        <strong>{contributions}</strong>
                      </div>
                      <div className="contributor_type">
                        {login === "stephin007" ||
                        login === "Justinnn07" ||
                        login === "wise-introvert" ? (
                          <p>Maintainer</p>
                        ) : (
                          <p>{type}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
