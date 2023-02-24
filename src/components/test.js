import React, { Component } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Howler, Howl } from "howler";
import s1 from "./sounds/s1.mp3";

const playmusic = () => {
	const sound = new Howl({ src: [s1] });
	sound.play();
};

export const Replay = (props) => {
	return (
		<div>
			<br />
			<h4>{props.title}</h4>
			<p>{`This music was made by ${props.user}`}</p>
			<button onClick={playmusic}>
				<i class="bi bi-play"></i>
				play music
			</button>
			<br />
		</div>
	);
};

const Test = () => {
	const { currentUser, logout } = useAuth();
	return (
		<div>
			<Replay name={currentUser.displayName} />
		</div>
	);
};
export default Test;
