import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<ColorModeScript initialColorMode={"dark"} />
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
