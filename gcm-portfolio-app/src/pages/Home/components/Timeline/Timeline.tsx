import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import WorkIconOne from "../../../../assets/image/autobots-svgrepo-com.svg";
import WorkIconTwo from "../../../../assets/image/darth-vader-svgrepo-com.svg";

export default function Timeline() {
  return (
    <div className="timeline-container">
      <VerticalTimeline lineColor="#0df7b0">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(33, 150, 243)",
          }}
          date="2011 - present"
          dateClassName="date"
          iconStyle={{
            background: "var(--secondary-color)",
            color: "#fff",
            width: "50px",
            height: "50px",
          }}
          icon={
            <img src={WorkIconOne} alt="work icon" className="icon-style" />
          }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{
            background: "var(--secondary-color)",
            color: "#fff",
            width: "50px",
            height: "50px",
          }}
          icon={
            <img src={WorkIconTwo} alt="work icon" className="icon-style" />
          }
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{
            background: "var(--secondary-color)",
            color: "#fff",
            width: "50px",
            height: "50px",
          }}
          icon={
            <img src={WorkIconTwo} alt="work icon" className="icon-style" />
          }
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{
            background: "var(--secondary-color)",
            color: "#fff",
            width: "50px",
            height: "50px",
          }}
          icon={
            <img src={WorkIconTwo} alt="work icon" className="icon-style" />
          }
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{
            background: "var(--secondary-color)",
            color: "#fff",
            width: "50px",
            height: "50px",
          }}
          icon={
            <img src={WorkIconTwo} alt="work icon" className="icon-style" />
          }
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{
            background: "var(--secondary-color)",
            color: "#fff",
            width: "50px",
            height: "50px",
          }}
          icon={
            <img src={WorkIconTwo} alt="work icon" className="icon-style" />
          }
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
