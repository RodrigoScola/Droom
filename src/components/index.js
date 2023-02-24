import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ChakraProvider, ColorModeScript, ColorModeProvider } from "@chakra-ui/react";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<ColorModeProvider>
				<ColorModeScript initialColorMode={"dark"} />
				<App />
			</ColorModeProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
