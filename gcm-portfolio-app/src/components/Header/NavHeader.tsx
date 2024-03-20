// import React from 'react';
import "./NavHeader.css";
import { Link } from "react-router-dom";
import Avatar from "../../assets/image/gcm-avatar-one.svg";

export default function NavigationHeader() {
	return (
		<div className="navBody">
			<div className="logoBorder">
				<img src={Avatar} alt="avatar logo" className="logo" />
			</div>
			<div id="whitespace"></div>
			<div>
				<Link to="/" className="navLink">
					{" "}
					Home{" "}
				</Link>
				<Link to="/about" className="navLink">
					{" "}
					About{" "}
				</Link>
				<Link to="/contact" className="navLink">
					{" "}
					Contact{" "}
				</Link>
			</div>
		</div>
	);
}
