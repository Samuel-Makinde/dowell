import React from "react";
import ChatHeader from "./ChatItems/ChatHeader";
import ProfileHead from "./Chats/message/ProfileHead";
import ReplyChat from "./Chats/message/ReplyChat";
import SearchBar from "./Chats/SearchBar";

const ChatSection = () => {
  return (
    <div className="container">
      <ChatHeader />
      {/* chats come here */}
      <div className="d-flex  flex-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row mb-5 mb-lg-2 mb-lg-2 mb-xl-2 mb-xxl-2">
        <SearchBar />
        <ProfileHead />
      </div>
      <ReplyChat />
    </div>
  );
};

export default ChatSection;
