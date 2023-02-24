import React, { useState } from "react";
import { Flex, Card, Button, FormControl, Input, FormLabel, Textarea, Heading, Box } from "@chakra-ui/react";
import { Paddle } from "../components/paddle";
import { useHistory } from "react-router-dom";
import { useFireship } from "../hooks/useFireship";
import { useMusic } from "../hooks/useMusic";
import { useAuth } from "../contexts/AuthContext";

export default function Main() {
	const { currentUser } = useAuth();

	const history = useHistory();

	const { songs: audioClips, playMusic, playSound, getSound } = useMusic();

	const fireship = useFireship();

	const [state, setState] = useState({
		playing: false,
		recording: false,
	});
	const [{ title, subtitle }, setInfo] = useState({ title: "", subtitle: "" });
	const [music, setMusic] = useState([]);
	const startRecord = () => {
		setState({ recording: true });
		setMusic([]);
	};
	const stopRecording = () => {
		setState((curr) => ({ ...curr, recording: false }));
	};
	const padClick = (obj) => {
		playSound(obj.sound);
		if (state.recording == true) {
			setMusic((curr) => [
				...curr,
				{
					src: obj.label,
					timing: Date.now(),
					delta: music.length ? Date.now() - music[music.length - 1].timing : 0,
				},
			]);
		}
	};

	const stopmusic = () => {
		setState((curr) => ({ ...curr, playing: false }));
	};

	const createMusic = async (e) => {
		e.preventDefault();
		const post = {
			music: music,
			createdAt: Date.now(),
			title: title,
			subtitle: subtitle,
			userId: currentUser.uid,
			user: {
				id: currentUser.uid,
				displayName: currentUser.displayName,
				photoUrl: currentUser.photoURL,
			},
		};
		await fireship.createPost(post);
		history.push("/");
	};

	return (
		<Card p={4} shadow={"xl"} w={"50%"} m={"auto"} mt={4}>
			<Heading textAlign={"center"}>Create a new Song!</Heading>
			<Box wrap={"wrap"}>
				<Flex gap={3} py={3} justifyContent={"center"}>
					<Paddle colorScheme={"green"} onClick={() => padClick(audioClips[0], 0)}>
						{/* {v.label} */}
					</Paddle>
					<Paddle colorScheme={"yellow"} onClick={() => padClick(audioClips[1], 1)}>
						{/* {v.label} */}
					</Paddle>
					<Paddle colorScheme={"purple"} onClick={() => padClick(audioClips[2], 2)}>
						{/* {v.label} */}
					</Paddle>
				</Flex>
				<Flex gap={3} pb={2} justifyContent={"center"}>
					<Paddle colorScheme={"pink"} onClick={() => padClick(audioClips[3], 3)}>
						{/* {v.label} */}
					</Paddle>
					<Paddle colorScheme={"red"} onClick={() => padClick(audioClips[4], 4)}>
						{/* {v.label} */}
					</Paddle>
					<Paddle colorScheme={"orange"} onClick={() => padClick(audioClips[5], 5)}>
						{/* {v.label} */}
					</Paddle>
				</Flex>
			</Box>
			<Box pt={5}>
				<Flex justifyContent={"center"} class="text-center mt-5">
					{console.log(state.recording)}
					{state.recording == false ? (
						<Button
							m={1}
							colorScheme={"linkedin"}
							onClick={() => {
								startRecord();
							}}
						>
							start recording
						</Button>
					) : (
						<Button
							m={1}
							colorScheme={"whatsapp"}
							onClick={() => {
								stopRecording();
							}}
						>
							stop recording
						</Button>
					)}
					{state.playing == false ? (
						<Button m={1} onClick={() => playMusic(music)}>
							Replay
						</Button>
					) : music.length ? (
						<Button m={1} onClick={() => stopmusic()}>
							Stop Playing
						</Button>
					) : null}
				</Flex>
			</Box>
			<Box pt={1} maxW={"1000px"} className="">
				<form onSubmit={createMusic}>
					<Box p={4}>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input
								onChange={(e) => setInfo((curr) => ({ ...curr, title: e.target.value }))}
								className="form-control"
								value={title}
								placeholder="qual é o título da música?"
								required
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Description</FormLabel>
							<Textarea
								value={subtitle}
								onChange={(e) => setInfo((curr) => ({ ...curr, subtitle: e.target.value }))}
								className="form-control"
								placeholder="Description"
								required
							/>
						</FormControl>
					</Box>
					<Flex justifyContent={"center"}>
						<Button type="submit" colorScheme={"whatsapp"}>
							Submit
						</Button>
					</Flex>
				</form>
			</Box>
		</Card>
	);
}
