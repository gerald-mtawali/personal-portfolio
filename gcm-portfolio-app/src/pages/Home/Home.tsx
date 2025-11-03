import { useState } from "react";
import "./Home.css";
import "../../index.css";
// import DevAvatar from '../../assets/image/DevAvatar.svg';
import BrushStrokeBackground from "../../assets/image/brush-stroke-banner-background 2.svg";
import { SummaryCard, SummaryDescription } from "./components/ProfileSummary";
import Timeline from "./components/Timeline/Timeline";
import detailsData from "./components/ProfileSummary/summary_description.json";
import { profileOptions } from "./components/ProfileSummary/types";

function HomePage() {
  const [selectedProfile, setSelectedProfile] =
    useState<profileOptions>("designer");

  const setProfile = (profile: profileOptions) => {
    if (profile.match(/designer|engineer|creator/gi))
      setSelectedProfile(profile);
  };
  // create a function that returns a list of components
  const profileNames: string[] = ["Designer", "Engineer", "Creator"];
  return (
    <div className="scroll">
      <div className="introContainer">
        <div id="intro_text" className="introDetail">
          <h2> My Name is Gerald Mtawali</h2>
          <h3> Full Stack Software Engineer</h3>
          <p> I design. I engineer. I create. </p>
        </div>
        <div className="introProfileContainer" id="intro_image">
          <img
            src={BrushStrokeBackground}
            alt="Background"
            className="introProfileBackground"
          />
        </div>
      </div>
      {/* <hr className="solid" /> */}
      <div className="profileSummary">
        {/* Place our three components in a line here */}
        <div className="profileSummaryCards">
          {profileNames.map((profile: string) => (
            <SummaryCard
              message={profile}
              handleProfileSelection={setProfile}
            />
          ))}
        </div>
        <div className="profileSummaryDetails">
          <SummaryDescription
            heading={detailsData.lorem_data[selectedProfile].heading}
            body={detailsData.lorem_data[selectedProfile].body}
            profile={selectedProfile}
          />
        </div>
      </div>
      {/* <hr className="solid" /> */}
      <div className="timelineContainer">
        <h1> Timeline Component Here </h1>
        <Timeline />
      </div>
    </div>
  );
}

export default HomePage;
