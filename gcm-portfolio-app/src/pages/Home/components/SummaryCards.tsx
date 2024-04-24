import { FunctionComponent } from "react";
import "./SummaryCards.css";

type CardProps = {
	message: string;
	handleProfileSelection: any; 
};

export const SummaryCard: FunctionComponent<CardProps> = ({ message, handleProfileSelection }:CardProps) => {

	const handleClick = () => {
		// then we set the selected profile 
		handleProfileSelection(message.toLowerCase()); 
		console.log(`${message} selected `)
	}

	return (
		<div className="summaryProfile" onClick={handleClick}>
			<p> The {message} </p>
		</div>
	);
};
