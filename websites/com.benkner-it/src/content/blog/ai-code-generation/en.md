---
title: "AI-Assisted Development: Where It Helps, Where It Doesn't"
permalink: ai-assisted-development
date: 2026-02-10
description: "A honest look at using LLMs for code generation in real projects — what works, what fails, and how to get the most out of it."
category: ai
---

After months of using AI assistants daily in production codebases, I've developed a nuanced view that sits somewhere between "it will replace us all" and "it's just autocomplete."

## Where AI genuinely saves time

**Boilerplate and repetitive patterns.** Writing the 15th API endpoint that follows the same structure? AI nails this. It understands the pattern from context and generates correct, consistent code in seconds.

**Test generation.** Give it a function and ask for edge cases — it often catches scenarios I wouldn't have thought of immediately. Not always correct, but a solid starting point.

**Documentation and comments.** Explaining what complex code does, generating JSDoc, writing README sections. This is where the time savings are dramatic.

**Translations and i18n.** Need the same text in three languages? AI handles this surprisingly well for technical content.

## Where it falls short

**Architecture decisions.** AI will happily generate code that works but is architecturally wrong for your context. It doesn't understand your system's constraints, your team's conventions, or your scaling requirements.

**Debugging complex issues.** When the bug spans multiple services and involves timing, state, or infrastructure — AI struggles. It can suggest common fixes, but it can't reason about your specific distributed system.

**Security-critical code.** Authentication flows, encryption, access control. AI-generated code in these areas needs extremely careful review. It tends to produce code that looks correct but misses subtle vulnerabilities.

## My workflow

I've settled on a pattern: **AI drafts, I architect.** I make the structural decisions, define the interfaces, and let AI fill in the implementation. Then I review every line as if a junior developer wrote it — because that's roughly the quality level.

The key insight: AI is a multiplier, not a replacement. A 10x tool for someone who knows what they're building, and a footgun for someone who doesn't.

## Tools I use

- **Claude Code** for complex refactoring and multi-file changes
- **GitHub Copilot** for inline completions while typing
- **ChatGPT** for research and rubber-ducking architecture decisions

The best results come from being specific. Vague prompts produce vague code. The more context you give — your tech stack, constraints, existing patterns — the better the output.
