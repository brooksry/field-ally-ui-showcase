import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

const initialMessages = [
  {
    id: "1",
    type: "user" as const,
    content: "Customer reporting that their 2025 4Runner hybrid hesitates during acceleration from a stop, especially when merging onto highways. They've had it for 3 months and it started happening about 2 weeks ago.",
    timestamp: "10:30 AM"
  },
  {
    id: "2", 
    type: "ai" as const,
    content: "I understand the customer is experiencing hesitation during acceleration in their 2025 4Runner hybrid. Let me analyze this issue and provide some insights based on similar cases.",
    timestamp: "10:31 AM"
  },
  {
    id: "3",
    type: "special" as const,
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Potential Issue:</h3>
          <p className="text-muted-foreground mb-4">
            The hesitation is likely related to the hybrid powertrain coordination between the electric motor and gasoline engine during power demand transitions. This is a known issue with some 2025 4Runner hybrid models.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Community-Sourced Solutions:</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li><strong>ECU Software Update:</strong> Toyota has released TSB T-SB-0094-25 addressing hybrid system calibration. Success rate: 87%</li>
            <li><strong>Battery Conditioning:</strong> Perform hybrid battery conditioning cycle. Takes 45 minutes, resolves issue in 73% of cases</li>
            <li><strong>Throttle Body Service:</strong> Clean throttle body and reset adaptations. Effective in 34% of cases when combined with software update</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Source:</h3>
          <p className="text-sm text-muted-foreground">
            Data compiled from 247 similar cases across Toyota forums, dealership reports, and manufacturer technical bulletins. Last updated: January 2025
          </p>
        </div>
      </div>
    ),
    timestamp: "10:32 AM"
  }
];

export function ChatPanel() {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: Date.now().toString(),
      type: "user" as const,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}