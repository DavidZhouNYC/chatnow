import { FC } from "react";

const Main: FC<{ children?: JSX.Element }> = ({ children }) => {
	return <main>{children}</main>;
};

export default Main;
