import React, { useState, useCallback, useEffect } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import axios from "axios";

const CrystalBall: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const retryOperation = useCallback(
    async (operation: () => Promise<any>, maxRetries = 3, delay = 2000) => {
      for (let i = 0; i < maxRetries; i++) {
        try {
          return await operation();
        } catch (error) {
          if (i === maxRetries - 1) throw error;
          console.log(
            `Attempt ${i + 1} failed. Retrying in ${delay / 1000} seconds...`
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    },
    []
  );

  const handleSendMessage = useCallback(async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await retryOperation(async () => {
        return axios.post("http://localhost:3001/chat", {
          messages: [...messages, userMessage],
        });
      });

      const botResponse = response.data.response;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: botResponse },
      ]);
    } catch (error) {
      console.error("Failed to get response from server:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, messages, retryOperation]);

  useEffect(() => {
    const welcomeMessage = {
      role: "assistant",
      content:
        "Welcome to the ChatBot Program! You can start chatting with the bot. Type 'exit' to end the conversation.",
    };
    setMessages([welcomeMessage]);
  }, []);

  return (
    <Box p={4} bg="gray.700" borderRadius="md" w="400px">
      <VStack spacing={4} align="stretch">
        <Box
          bg="gray.800"
          p={4}
          borderRadius="md"
          overflowY="scroll"
          maxHeight="300px"
        >
          {messages.map((msg, index) => (
            <Text
              key={index}
              alignSelf={msg.role === "user" ? "flex-end" : "flex-start"}
              bg={msg.role === "user" ? "blue.500" : "green.500"}
              p={2}
              borderRadius="md"
              mb={2}
            >
              {msg.content}
            </Text>
          ))}
        </Box>
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && !loading && handleSendMessage()
          }
        />
        <Button
          onClick={handleSendMessage}
          isLoading={loading}
          colorScheme="blue"
          isDisabled={loading || input.trim() === ""}
        >
          Send
        </Button>
      </VStack>
    </Box>
  );
};

export default CrystalBall;
