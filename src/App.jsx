import React from "react";
import SelectNotes from "./components/SelectNotes/SelectNotes";
import NotesSection from "./components/NotesSection/NotesSection";
import "./App.css";

function App() {
	return (
		<div className="App">
			<SelectNotes />
			<NotesSection />
		</div>
	);
}

export default App;
