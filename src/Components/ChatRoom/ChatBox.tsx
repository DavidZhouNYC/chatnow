import React, { FC } from "react";
import { getAuth } from "firebase/auth";
import { addDoc, getFirestore, serverTimestamp } from "firebase/firestore";

const ChatBox: FC<{
	messagesRef: any;
	formValue: string;
	setFormValue: Function;
	scrollAnchor: React.RefObject<HTMLDivElement>;
}> = ({ messagesRef, formValue, setFormValue, scrollAnchor }) => {
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
		scrollAnchor.current!.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<form onSubmit={sendMessageHandler} className='min-w-full'>
			<input
				value={formValue}
				onChange={(e) => setFormValue(e.target.value)}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default ChatBox;
