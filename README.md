# Prompts Collector

Giving the right context to AI models is tough. This repo is an idea to programmatically fetch code from libraries directly to use for AI context.

The general thought is something like this repo could generate AI RAG-friendly text of libraries you're interested in and save them into your own projects.

The inspiration for this is:

- [Cursor Directory](https://cursor.directory/)
- [Cursor List](https://cursorlist.com/)

## Current Problems

- Cursor RAG (`@docs`) seems to work well for libraries that are well documented. But what if they are not? What if the source code may be helpful too?
- Everyone's project is a mismash of different tech stacks. What if you want to follow best practices and need specific context for your stack?
  - *Thought*: You should be able to build a "directory" containing all of your libraries and your RAG-friendly context files.
  - *Thought*: Maybe you can even summarize all of these files into a single file using AI to generate the summarized file, containing the most important details

## Getting Started

```bash
# The repo uses bun for its CLI runner
bun install repomix
```

Right now, you can copy the `index.ts` file (using Bun) and run it. It will fetch the AI RAG-friendly text & code from the libraries defined in the config and save it to the `repomix` folder.

Feel free to modify define new libraies and custom config.

## TODO

- [ ] WIP: Check for the date, skip if not older than 7 days (customizable)

## Ideas

- [ ] Use cheap AI model (Google Gemini - Vercel AI SDK) to generate concise summaries of major functions/interfaces from repomix file, produce a new file for each package (see [yamadashy/repomix at dbbb1a9f3305937a61dde701f18c2c5a6e9347bb](https://github.com/yamadashy/repomix/tree/dbbb1a9f3305937a61dde701f18c2c5a6e9347bb?tab=readme-ov-file#custom-instruction))
