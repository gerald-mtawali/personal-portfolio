import { FunctionComponent } from "react";
import "./SummaryCards.css";
import { profileOptions } from "./types";

type CardProps = {
  message: string;
  handleProfileSelection: (profile: profileOptions) => void;
};

export const SummaryCard: FunctionComponent<CardProps> = ({
  message,
  handleProfileSelection,
}: CardProps) => {
  const handleClick = () => {
    // then we set the selected profile
    handleProfileSelection(message.toLowerCase() as profileOptions);
    console.log(`${message} selected `);
  };

  return (
    <div className="summaryProfile" onClick={handleClick}>
      <p> The {message} </p>
    </div>
  );
};
