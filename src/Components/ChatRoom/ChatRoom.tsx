import { FC, useRef, useState } from "react";
import {
	getFirestore,
	collection,
	query,
	orderBy,
	limit,
	serverTimestamp,
	addDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import ChatBox from "./ChatBox";

const ChatRoom: FC<{ app: any }> = ({ app }) => {
	const dummy = useRef();
	const messageInput = useRef();

	const firestore = getFirestore(app);
	const messagesRef = collection(firestore, "messages");
	const q = query(messagesRef, orderBy("createdAt", "desc"), limit(25));
	const [messages] = useCollectionData(q);

	const [formValue, setFormValue] = useState("");

	return (
		<>
			<h1>Chat Room</h1>
			{messages &&
				messages
					.slice(0)
					.reverse()
					.map((msg, i) => <ChatMessage key={i} message={msg} />)}

                    <ChatBox messagesRef={messagesRef} formValue={formValue} setFormValue={setFormValue} />
		</>
	);
};

export default ChatRoom;
