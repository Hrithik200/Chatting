import { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
import { ChatContext } from "../context/ChatContext";
import UserChat from "../components/chat/userChat";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, userChatsError } = useContext(ChatContext);
    console.log("userChats", userChats);

    return (
        <Container>
            {userChats?.length < 1 ? null : (
                <Stack direction='horizontal' gap={4} className='align-items-start'>
                    <Stack className='messages-box flex-grow-0 pe-3' gap={3}>
                        {isUserChatsLoading && <p> Loading Chatss..</p>}
                        {userChats?.map((chat, index) => {
                            return (
                                <div key={index}>
                                    <UserChat chat={chat} user={user} />
                                </div>
                            );
                        })}
                    </Stack>
                    <p>Chat</p>
                </Stack>
            )}
        </Container>
    );
};

export default Chat;
