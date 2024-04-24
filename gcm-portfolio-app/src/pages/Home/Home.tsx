import { useState } from "react";
import "./Home.css";
import "../../index.css";
// import DevAvatar from '../../assets/image/DevAvatar.svg';
import BrushStrokeBackground from "../../assets/image/brush-stroke-banner-background 2.svg";
import { SummaryCard } from "./components/SummaryCards";
import { SummaryDescription } from "./components/SummaryDetails";
import detailsData from "./components/summary_description.json";

type profile = "designer" | "creator" | "engineer";

function HomePage() {
	const [selectedProfile, setSelectedProfile] = useState<profile>("designer");

	const setProfile = (profile: profile) => {
		if (profile.match(/designer|engineer|creator/gi))
			setSelectedProfile(profile);
		// console.log(`profile ${profile} selected`);
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
					{/* <img src={DevAvatar} alt="Avatar" className='introProfileForeground'/> */}
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
						heading={
							detailsData.lorem_data[selectedProfile].heading
						}
						body={detailsData.lorem_data[selectedProfile].body}
						profile={selectedProfile}
					/>
				</div>
			</div>
			{/* <hr className="solid" /> */}
		</div>
	);
}

export default HomePage;
