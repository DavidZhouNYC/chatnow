import { FC } from "react";

const Footer: FC<{ children?: JSX.Element }> = ({ children }) => {
	return <footer>{children}</footer>;
};

export default Footer;
