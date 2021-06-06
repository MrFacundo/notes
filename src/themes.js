import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#e3e9e2",
	fontColor: "#000",
	noteBackgroundColor: "#fef68a",
	noteBorder: "none",
	footerColor: "#424242",
};

export const darkTheme = {
	body: "#290e0e",
	fontColor: "#fff",
	noteBackgroundColor: "#502e2e",
	noteBorder: "2px solid white",
	footerColor: "#c6c6c6",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
	
	h1 {
		color: ${(props) => props.theme.fontColor};
	}
	.note {
		border: ${(props) => props.theme.noteBorder};
	}
	.note, .note.new, textarea {
		background-color: ${(props) => props.theme.noteBackgroundColor};
		color: ${(props) => props.theme.fontColor};

	}

	.note-footer {
		color: ${(props) => props.theme.footerColor};
	}
`;
