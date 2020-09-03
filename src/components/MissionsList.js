import React from "react";

const MissionsList = props => {
  // console.log(props.missions); to see what is currently being passed down
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          {props.missions.map(mission => (
            <div data-testid="mission" className="mission" key={mission.mission_id}>
              {mission.mission_name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MissionsList;
