import React, { useRef, useState } from "react";
import { Button, Input, Box } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updatePassword, updateEmail } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords do not match");
		}

		const promises = [];
		setLoading(true);
		setError("");

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				history.push("/");
			})
			.catch(() => {
				setError("Failed to update account");
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<>
			<Box>
				<Box>
					<h2 className="text-center mb-4">Atualizar o Perfil</h2>
					{/* {error && <Alert variant="danger">{error}</Alert>} */}
					<form onSubmit={handleSubmit}>
						<Box id="email">
							{/* <Form.Label>Email</Form.Label> */}
							<Input type="email" ref={emailRef} required defaultValue={currentUser.email} />
						</Box>
						<Box id="password">
							<label>Senha</label>
							<Input
								type="password"
								ref={passwordRef}
								placeholder="deixe em branco para continuar com a mesma"
							/>
						</Box>
						<Box id="password-confirm">
							<label>Confirmação de Senha</label>
							<Input
								type="password"
								ref={passwordConfirmRef}
								placeholder="deixe em branco para continuar com a mesma"
							/>
						</Box>
						<Button disabled={loading} className="w-100" type="submit">
							Atualizar
						</Button>
					</form>
				</Box>
			</Box>
			<div className="w-100 text-center mt-2">
				<Link to="/">Voltar para a página principal</Link>
			</div>
		</>
	);
}
