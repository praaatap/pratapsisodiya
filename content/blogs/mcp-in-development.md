---
title: "Building Tools with MCP"
date: "2026-03-17"
excerpt: "How to create your own tools using the new Model Context Protocol."
---

# Implementing custom MCP tools

Building on my previous post, integrating custom capabilities via MCP is straightforward. You only define the tool's schema, and the server exposes it to the client.

## Tool Definitions

Define tools in JSON Schema so your LLM knows exactly what arguments to pass:

```json
{
  "name": "fetch_weather",
  "description": "Fetch current weather by city",
  "inputSchema": {
    "type": "object",
    "properties": {
      "city": { "type": "string" }
    },
    "required": ["city"]
  }
}
```

The future of AI lies in seamlessly connected tools!
