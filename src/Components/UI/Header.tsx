import { FC } from "react";

const Header: FC<{ children?: JSX.Element }> = ({ children }) => {
	return <header>{children}</header>;
};

export default Header;
