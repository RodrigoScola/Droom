import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
export const Paddle = ({ onClick, ...props }) => {
	return (
		<motion.button whileTap={{ scale: 0.85 }}>
			<Button
				{...props}
				outline={"2px"}
				outlineColor={"white"}
				borderRadius={"full"}
				size={"lg"}
				onClick={onClick}
			></Button>
		</motion.button>
	);
};
