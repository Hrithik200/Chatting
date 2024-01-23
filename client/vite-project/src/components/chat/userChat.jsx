import { useFetchRecipientUser } from "../../hooks/userFetchRecipient";
import { Container, Stack } from "react-bootstrap";
import profilePic from "../../assets/profilePic.svg"
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
const UserChat = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user);
    const{onlineUsers}=useContext(ChatContext);
    const isOnline=onlineUsers?.some((user)=>user?.userId === recipientUser?._id)?'user-online':"" 

    return (
        <Stack direction='horizontal ' gap={3} className='user-card align-items-cetner p-2 justify-content-between'>
            <div className='d-flex'>
                <div className='me-2'><img src={profilePic} height="35px"/></div>
                <div className='text-content'>
                    <div className='name'>{recipientUser?.name}</div>
                    <div className='text'>Text Message</div>
                </div>
            </div>
            <div className='d-flex flex-column align-items-end'>
                <div className='date'>12/12/2022</div>
                <div className='this-user-notifications'>2 </div>
                <span className={isOnline?"user-online":""}></span>
            </div>
        </Stack>
    );
};

export default UserChat;
