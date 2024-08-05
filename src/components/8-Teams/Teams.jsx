import React from "react";
import { teams } from "../../data";
import { Container } from "react-bootstrap";

const Teams = () => {
  return (
    <Container>
      <section
        className="section teams"
        id="team"
        style={{
          width: "85%",
          marginRight: "7.5%",
          marginLeft: "7.5%",
        }}
      >
        <h1 className="section-header">OurTeam</h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "20px",
          }}
        >
          Tours give you the opportunity to see a lot,within a time frame
        </p>
        {teams.map((team) => {
          return (
            <div className="teams-section">
              <div className="teams-content">
                <div>
                  <img src={team.image1} alt="" className="teams-image" />
                  <h4 className="team-name">{team.name1}</h4>
                </div>
                <div>
                  <p className="team-desc">{team.desc1}</p>
                </div>
              </div>
              <div className="teams-content">
                <div>
                  <img src={team.image2} alt="" className="teams-image" />
                  <h4 className="team-name">{team.name2}</h4>
                </div>
                <div>
                  <p className="team-desc">{team.desc2}</p>
                </div>
              </div>

              <div className="teams-content">
                <div>
                  <img src={team.image3} alt="" className="teams-image" />
                  <h4 className="team-name">{team.name3}</h4>
                </div>
                <div>
                  <p className="team-desc">{team.desc2}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Container>
  );
};

export default Teams;
