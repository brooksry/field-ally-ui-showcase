import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

const initialMessages = [
  {
    id: "1",
    type: "user" as const,
    content: "Customer has a 2025 4Runner with a water leak issue. They noticed water getting into the cabin, particularly on the driver's side. This happened after going through a car wash.",
    timestamp: "10:30 AM"
  },
  {
    id: "2", 
    type: "ai" as const,
    content: "I'll analyze this water leak issue for the 2025 4Runner and provide relevant findings from automotive forums and communities to supplement official diagnostic procedures.",
    timestamp: "10:31 AM"
  },
  {
    id: "3",
    type: "special" as const,
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Finding 1: Moonroof Leaking During High-Pressure Car Wash</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Community-Reported Symptoms:</h4>
            <p className="text-muted-foreground mb-3">
              Owners report that when taking their 2025 4Runner through a touchless or other high-pressure car wash, water can get past the moonroof seal. Water lightly spritzed the driver's side of the cabin. This issue was not reported during normal rainfall, suggesting it is specific to concentrated, high-pressure water streams.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Community-Speculated Root Cause:</h4>
            <p className="text-muted-foreground mb-3">
              High-pressure water jets forcing their way past the moonroof's primary seal. One owner noted that the moonroof glass appeared to be slightly lower on one side when closed, suggesting potential misalignment. Toyota dealer stated it's normal for some water to get through and that the moonroof housing has drains designed to manage this water.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Community-Sourced Solutions:</h4>
            <p className="text-muted-foreground mb-3">
              Dealership did not perform repair, stating system was operating as designed. Owner's solution was to avoid high-pressure car washes and consider hand-washing or lower-pressure systems instead.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Finding 2: Clogged Moonroof/Sunroof Drains (Previous Generation Experience)</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Community-Reported Symptoms:</h4>
            <p className="text-muted-foreground mb-3">
              Previous generation 4Runner owners experienced significant water leaks on driver-side floor and dash area after rain or washing. The carpet becomes wet from the bottom up.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Community-Speculated Root Cause:</h4>
            <p className="text-muted-foreground mb-3">
              Clogged moonroof drain tubes. All moonroofs let some water past the outer seal into a drain pan, which exits through tubes routed down the A-pillars. When drain tubes become clogged with debris, the pan overflows and water leaks into the headliner, down the A-pillar, and into the dashboard and floorboard area.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Community-Sourced Solutions:</h4>
            <p className="text-muted-foreground mb-3">
              Clear the drain tubes by running a flexible line (like heavy-duty weed wacker string) down the drain holes in the moonroof assembly corners to push the clog out. Alternative method uses compressed air to blow the clog free. Pour small amount of water into drains afterward to confirm they flow freely.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Source:</h3>
          <p className="text-sm text-muted-foreground">
            Data compiled from Cars.com, 4Runner6G Forum, Toyota-4Runner.org, and Reddit communities. This information supplements, not replaces, official OEM diagnostic procedures. Always follow manufacturer's safety and repair guidelines.
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