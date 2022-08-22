import { getAuth } from "firebase/auth";
import { FC } from "react";

const SignOut: FC<{}> = () => {
	const auth = getAuth();
	return (
		auth.currentUser && (
			<button onClick={() => auth.signOut()}>Sign Out</button>
		)
	);
};

export default SignOut;