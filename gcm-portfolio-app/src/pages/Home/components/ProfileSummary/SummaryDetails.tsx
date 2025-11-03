import { FunctionComponent } from "react";
import './SummaryDetails.css'; 

// import json from './summary_description.json'; 

type Props = {
    heading: string, 
    body: string, 
    profile: string
}

export const SummaryDescription: FunctionComponent<Props> = ({heading, body, profile}: Props) => {

    return (
        <div className="descriptionContainer" key={profile}>
            <h1>{heading}</h1>
            <p>{body}</p>
        </div>
    )
}
