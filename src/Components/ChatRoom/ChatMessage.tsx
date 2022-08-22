import { FC } from "react";
import { getAuth } from "firebase/auth";

const ChatMessage: FC<{ message: any }> = ({ message }) => {
	const { text, uid, photoURL } = message;
	const messageClass =
		uid === getAuth().currentUser?.uid ? "sent" : "received";

	return (
		<div className={`message ${messageClass}`}>
			<img src={photoURL || '../../images/default_avatar.png'} />
			<p>{text}</p>
		</div>
	);
};

export default ChatMessage;
