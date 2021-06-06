import React from "react";

export const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className="header">
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
				}
				className="mode"
			>
				Toggle mode
			</button>
		</div>
	);
};
