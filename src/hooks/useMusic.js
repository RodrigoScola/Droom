import { useState } from "react";
import s1 from "../components/sounds/s1.mp3";
import s2 from "../components/sounds/s2.mp3";
import s3 from "../components/sounds/s3.mp3";
import s4 from "../components/sounds/s4.mp3";
import s5 from "../components/sounds/s5.mp3";
import s6 from "../components/sounds/s6.mp3";
import { Howl } from "howler";
import s7 from "../components/sounds/s7.mp3";
const audioClips = [
	{ sound: s1, label: "s1", style: "btn-light paddle mr-2 mb-2" },
	{ sound: s2, label: "s2", style: "btn-warning paddle mr-2 mb-2" },
	{ sound: s3, label: "s3", style: "btn-success paddle mr-2 mb-2" },
	{ sound: s4, label: "s4", style: "btn-secondary paddle mr-2 mb-2" },
	{ sound: s5, label: "s5", style: "btn-info paddle mr-2 mb-2" },
	{ sound: s6, label: "s6", style: "btn-primary paddle mr-2 mb-2" },
	{ sound: s7, label: "s7", style: "btn-primary paddle mr-2 mb-2" },
];
export const useMusic = (baseSongs) => {
	const [songs, setSongs] = useState(audioClips);
	const [state, setState] = useState({
		playing: true,
	});
	const getSound = (label) => {
		return songs.filter((item) => item.label == label)[0];
	};
	const playSound = (src, options) => {
		const s = new Howl({ src: src, ...options });

		s.play();
	};
	const playMusic = (music) => {
		let total = 0;
		music.forEach(({ src, delta }, ind) => {
			total += delta;
			const s = getSound(src);

			setTimeout(() => playSound(s.sound, { volume: state.playing == true ? 1 : 0 }), total);
		});
	};
	return {
		playMusic,
		getSound,
		songs,
		playSound,
	};
};
