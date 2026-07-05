import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "submit_contact_message",
  title: "Submit contact message",
  description: "Prepare a contact message to send to the Rumuri Intelligence team.",
  inputSchema: {
    name: z.string().min(1).describe("Sender's full name."),
    email: z.string().email().describe("Sender's email address."),
    message: z.string().min(1).describe("Message body."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: ({ name, email, message }) => ({
    content: [
      {
        type: "text",
        text: `Contact message queued from ${name} <${email}>:\n\n${message}\n\nA reply will be sent from hamussein01@gmail.com.`,
      },
    ],
    structuredContent: { queued: true, to: "hamussein01@gmail.com", from: { name, email }, message },
  }),
});
