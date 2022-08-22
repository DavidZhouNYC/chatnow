import { FC } from "react";

const Main: FC<{ children?: JSX.Element }> = ({ children }) => {
	return <main className="m-0 p-0">{children}</main>;
};

export default Main;
