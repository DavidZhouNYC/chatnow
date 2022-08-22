import { FC } from "react";

const Header: FC<{ children?: JSX.Element[] }> = ({ children }) => {
	return <header className="flex justify-between items-center p-5 bg-blue-400">{children}</header>;
};

export default Header;
