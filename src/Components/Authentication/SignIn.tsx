import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FC } from "react";

const signInWithGoogleHandler = () => {
	const provider = new GoogleAuthProvider();
	const auth = getAuth();
	signInWithPopup(auth, provider);
};

const SignIn: FC<{}> = () => {
	return (
		<button onClick={signInWithGoogleHandler}>Sign in with Google</button>
	);
};

export default SignIn;
