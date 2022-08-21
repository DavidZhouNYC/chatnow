import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header";
import Main from "./Components/UI/Main";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({});

const App = () => {
	return (
		<>
			<Header>
				<p>Header</p>
			</Header>
			<Main>
				<p>Main</p>
			</Main>
			<Footer />
		</>
	);
};

export default App;
