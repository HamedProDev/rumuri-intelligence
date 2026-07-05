import { defineTool } from "@lovable.dev/mcp-js";

const AREAS = [
  { key: "nlp", name: "Natural Language Processing", summary: "Kinyarwanda and multilingual African NLP." },
  { key: "asr", name: "Automatic Speech Recognition", summary: "Speech-to-text for African languages." },
  { key: "genai", name: "Generative AI", summary: "Text, image and multimodal generation grounded in African contexts." },
  { key: "cv", name: "Computer Vision", summary: "Vision systems for OCR, sign language and mobility." },
  { key: "accessibility", name: "Accessibility AI", summary: "Assistive tech for deaf, blind and low-literacy users." },
  { key: "robotics", name: "Robotics", summary: "Applied robotics research for African industry." },
  { key: "autonomy", name: "Autonomous Vehicles", summary: "Perception and planning for African road conditions." },
  { key: "cloud", name: "AI Cloud", summary: "Sovereign AI infrastructure and model serving." },
  { key: "foundation", name: "Foundation Models", summary: "Kinyarwanda-first foundation models for Africa." },
];

export default defineTool({
  name: "list_focus_areas",
  title: "List research focus areas",
  description: "List Rumuri Intelligence's research and product focus areas with short summaries.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(AREAS, null, 2) }],
    structuredContent: { areas: AREAS },
  }),
});
