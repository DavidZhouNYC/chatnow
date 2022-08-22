import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header";
import Main from "./Components/UI/Main";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./Components/ChatRoom/ChatRoom";
import SignIn from "./Components/Authentication/SignIn";
// import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCYkTo8MhdCrMmeHWqULRbw_-z58xxB2OM",
	authDomain: "chatnow-29fa2.firebaseapp.com",
	projectId: "chatnow-29fa2",
	storageBucket: "chatnow-29fa2.appspot.com",
	messagingSenderId: "321926982387",
	appId: "1:321926982387:web:3d89838b3808b4c481a586",
	measurementId: "G-8P6DC80QVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const analytics = getAnalytics(app);

const App = () => {
	const [user] = useAuthState(auth);

	return (
		<>
			<Header>
				<p>Header</p>
			</Header>
			<Main>{user ? <ChatRoom app={app} /> : <SignIn />}</Main>
			<Footer />
		</>
	);
};

export default App;
