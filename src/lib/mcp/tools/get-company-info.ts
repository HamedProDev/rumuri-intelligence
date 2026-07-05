import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description: "Return an overview of Rumuri Intelligence: mission, focus areas, and contact.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            name: "Rumuri Intelligence",
            country: "Rwanda",
            mission:
              "Building foundational AI for Kinyarwanda and Africa across NLP, ASR, Generative AI, Computer Vision, Accessibility AI, Robotics, Autonomous Vehicles, AI Cloud, and Foundation Models.",
            focusAreas: [
              "NLP","ASR","Generative AI","Computer Vision","Accessibility AI",
              "Robotics","Autonomous Vehicles","AI Cloud","Foundation Models"
            ],
            contact: { email: "hamussein01@gmail.com" },
          },
          null,
          2,
        ),
      },
    ],
  }),
});
