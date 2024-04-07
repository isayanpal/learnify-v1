import React, { useState } from "react";
import Chatbot from "../components/Chatbot";

const Edos = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([]);
    setMessages([{ content: message, user: true }]);
    handleAPIResponse(message);
  };
  const handleAPIResponse = async (userMessage) => {
    const url = "https://ai-api-textgen.p.rapidapi.com/completions";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "4f2c1dfc6amsh7c1871aa43704e7p120d8ejsn098fdfd8eb5f",
        "X-RapidAPI-Host": "ai-api-textgen.p.rapidapi.com",
      },
      body: JSON.stringify({
        init_character: "you like computers",
        user_name: "AI",
        character_name: "Edos",
        text: userMessage,
      }),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: result, user: false },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-[20px] items-center mt-10">
      <div className=" flex flex-col items-center">
        <h1 className="text-[54px] text-[#FCDC2A] font-light">
          Ask Our Chatbot <span className="font-bold">EdOs!</span>
        </h1>
        <p className="text-[20px]">For all your doubts</p>
      </div>

      <div>
        <Chatbot messages={messages} onSendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Edos;
