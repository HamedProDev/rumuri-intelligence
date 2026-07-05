import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listFocusAreas from "./tools/list-focus-areas";
import submitContactMessage from "./tools/contact-form";

export default defineMcp({
  name: "rumuri-intelligence-mcp",
  title: "Rumuri Intelligence MCP",
  version: "0.1.0",
  instructions:
    "Tools for exploring Rumuri Intelligence — a Rwandan AI research company. Use get_company_info for an overview, list_focus_areas to enumerate research pillars, and submit_contact_message to draft an inquiry.",
  tools: [getCompanyInfo, listFocusAreas, submitContactMessage],
});
