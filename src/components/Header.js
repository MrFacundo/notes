import React from "react";

export const Header = ({ themeToggler }) => {
	return (
		<div className="header">
			<h1>Notes</h1>
			<button onClick={() => themeToggler()} className="mode">
				Toggle mode
			</button>
		</div>
	);
};
