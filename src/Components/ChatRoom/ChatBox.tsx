import { FC } from "react";
import { getAuth } from "firebase/auth";
import { addDoc, getFirestore, serverTimestamp } from "firebase/firestore";

const ChatBox: FC<{
	messagesRef: any;
	formValue: string;
	setFormValue: Function;
}> = ({ messagesRef, formValue, setFormValue }) => {
	const sendMessageHandler = async (event: any) => {
		event.preventDefault();
		const auth = getAuth();
		const { uid, photoURL } = auth.currentUser!;

		await addDoc(messagesRef, {
			uid,
			photoURL,
			text: formValue,
			createdAt: serverTimestamp(),
		});

		setFormValue("");
	};

	return (
		<form onSubmit={sendMessageHandler}>
			<input
				value={formValue}
				onChange={(e) => setFormValue(e.target.value)}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default ChatBox;
