import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ChakraProvider, ColorModeProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
