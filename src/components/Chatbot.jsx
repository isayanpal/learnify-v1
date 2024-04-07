import React from "react";

const Chatbot = ({ messages, onSendMessage }) => {
  const messageList = messages.map((message) => (
    <li
      key={message.content}
      className={`message ${message.user ? "user" : ""}`}
    >
      {message.content}
    </li>
  ));

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.elements.messageInput.value.trim();
    if (message) {
      onSendMessage(message);
      event.target.elements.messageInput.value = "";
    }
  };
  return (
    <div className="flex flex-col gap-[50px] items-center">
      <form onSubmit={handleSendMessage} className="w-[500px] h-[50px] m-5">
        <div className="flex flex-col items-center gap-[20px]">
          <input
            type="text"
            id="messageInput"
            className="border border-black shadow-[#FCDC2A] shadow-md  p-3 rounded-[20px] w-[500px]"
            placeholder="Ask"
          />
          <button
            type="submit"
            className="w-[100px] h-[50px] rounded-[25px] bg-[#FCDC2A] hover:bg-[#39A377] hover:text-[white] px-5 text-center font-medium"
          >
            Ask
          </button>
        </div>
      </form>
      <ul className="w-[779px] bg-[#E7E7E7] m-10 p-7 drop-shadow-lg rounded-[25px]">
        {messageList}
      </ul>
    </div>
  );
};

export default Chatbot;
