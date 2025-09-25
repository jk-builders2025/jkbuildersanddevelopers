"use client";
import React, { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

interface ChatBotProps {
  apiEndpoint: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ apiEndpoint }) => {
  const [showChat, setShowChat] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { type: "user" | "bot"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const queries = [
    "What services do you offer?",
    "Can I get a quote?",
    "Do you provide support?",
  ];

  const askBot = async (question: string) => {
    if (!question) return;
    setChatHistory((prev) => [...prev, { type: "user", text: question }]);
    setLoading(true);

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setChatHistory((prev) => [...prev, { type: "bot", text: data.answer }]);
    } catch (err) {
      console.error(err);
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong." },
      ]);
    }

    setLoading(false);
    setCustomMessage("");
  };

  return (
    <>
      {showChat && (
        <div className="fixed bottom-20 right-6 bg-white p-4 rounded-lg shadow-lg z-50 w-80 max-h-[400px] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-800 text-lg">Chat with us</h3>
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto mb-2 flex flex-col gap-2">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded ${
                  msg.type === "user"
                    ? "bg-green-100 self-end"
                    : "bg-gray-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-gray-500">Typing...</div>}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300 text-black"
            />
            <button
              onClick={() => askBot(customMessage)}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded transition transform hover:scale-110"
            >
              <FaPaperPlane />
            </button>
          </div>

          {/* Predefined Queries */}
          <div className="flex flex-col gap-2 mt-2">
            {queries.map((q, idx) => (
              <button
                key={idx}
                className="text-left px-3 py-2 bg-gray-100 text-black rounded hover:bg-gray-200 transition duration-200"
                onClick={() => askBot(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Chat */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-20 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50"
      >
        Chat
      </button>
    </>
  );
};

export default ChatBot;
