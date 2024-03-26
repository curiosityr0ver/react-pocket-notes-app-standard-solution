import React, { useContext } from "react";
import styles from "../../selectednotes.module.css";
import { NotesContext } from "../../../../context/NoteContext";
function NoteHeading({ noteHeading }) {
	const { isMobile, setHide, setCurrentGroup } = useContext(NotesContext);
	const { letters } = noteHeading;

	const handleClick = () => {
		setCurrentGroup(noteHeading);
		if (isMobile) {
			setHide(true);
		}
	};

	return (
		<div
			onClick={handleClick}
			className={`${styles.groupName} `}
			key={noteHeading?.name}
		>
			<div
				className={styles.icon}
				style={{ backgroundColor: noteHeading?.color }}
			>
				{noteHeading.name && letters}
			</div>
			<div>{noteHeading.name}</div>
		</div>
	);
}

export default NoteHeading;
