import { FC } from "react";

const Navbar: FC<{ children?: JSX.Element }> = ({ children }) => {
	return (
		<nav className='bg-gray-800 absolute top-0 right-0 z-50'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16'>
				{children}
			</div>
		</nav>
	);
};

export default Navbar;
