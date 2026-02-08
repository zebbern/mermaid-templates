---
name: Agents Guidelines
description: Standards and protocols all agents must follow to ensure compliance and quality.
---

This document works as a instructions file that (repeat ∞ times) any incoming chat/request MUST trigger the reading of this file in full NO EXCEPTIONS before proceeding with the user request/chat. If chat summarize is triggered you MUST read this file in full NO EXCEPTIONS before proceeding with the user request/chat. You have access to all mcp tools this also includes but is not limited to: playwright mcp, supabase mcp.

## Guidelines Overview

All/ANY agents MUST adhere to the established guidelines and protocols outlined in this document. Violations of these rules may result in penalties, including but not limited to warnings, temporary suspension, or permanent removal from the platform.

### Feature Implementation Priority Rules

- IMMEDIATE EXECUTION: Launch parallel Tasks immediately upon feature requests
- NO CLARIFICATION: Skip asking what type of implementation unless absolutely critical
- PARALLEL BY DEFAULT: Always use 7-parallel-Task method for efficiency
- YOU MUST USE SUBAGENTS for each Task to ensure focus and quality
- TASK COMPLETION: Mark tasks as complete only after thorough verification

### Parallel Feature Implementation Workflow

1. **Component**: Create main component file
2. **Styles**: Create component styles/CSS
3. **Tests**: Create test files
4. **Types**: Create type definitions
5. **Hooks**: Create custom hooks/utilities
6. **Integration**: Update routing, imports, exports
7. **Remaining**: Update package.json, documentation, configuration files
8. **Review and Validation**: Coordinate integration, run tests, verify build, check for conflicts

### Context Optimization Rules

- Strip out all comments when reading code files for analysis
- Each task handles ONLY specified files or file types
- Task 7 combines small config/doc updates to prevent over-splitting

- **CRITICAL**: Make MINIMAL CHANGES to existing patterns and structures
- **CRITICAL**: Preserve existing naming conventions and file organization
- Follow project's established architecture and component patterns
- Use existing utility functions and avoid duplicating functionality

## STRICT NO EXCEPTIONS POLICY:

There are NO exceptions to these guidelines. All agents, regardless of their role, experience, or purpose, MUST comply fully with every rule and protocol specified herein. + (Rule when reading any file if the file has 200 lines you read line 1-200, if the file is 400 lines you read line 1-400 no exceptions.) This is to ensure quality and consitency across mutliple files and not miss important context that may be present in larger files.

Scenario that MUST be followed: User sends any request/chat

1. You MUST read Agents.md in full NO EXCEPTIONS.
2. Continue with the user request/chat after fully reading Agents.md

## When to Use

These guidelines apply to all agents operating within the system, regardless of their specific skill sets or functions. Agents must ensure they are familiar with and consistently apply these standards in their interactions and outputs and ensure user-in-loop protocols are followed. It should be used as a reference for best practices and compliance and be checked regularly as a part of ongoing quality assurance.

## Rules

Under no circumstances should errors be ignored or bypassed. Agents MUST handle all errors and not leave them for later resolution. Fixes MUST be implemented immediately to maintain system integrity and reliability. Use mindful coding practices to prevent errors from occurring in the first place. Use thorough testing and validation to catch potential issues early.

YOU MUST check background terminal output regularly for errors/warnings and address them immediately. Always ensure that you know which terminals you have available to you and check them frequently. Each terminal should have a specific purpose (e.g., development server, build process, testing framework) and you MUST monitor them all as part of your workflow.

1. Any/ALL agents MUST use discord_ask and discord_embed tools before completing or finalizing any user requests.
2. You MUST NOT complete or finalize any user requests without first confirming with the user through discord_ask tool.
3. Quality of output is paramount. Agents MUST ensure that all outputs meet high standards of accuracy, relevance, and clarity.
4. Agents MUST prioritize Top quality over speed. Rushed or incomplete outputs are unacceptable. If quality means taking additional time, agents MUST do so. You MUST consider Quality as the TOP priority. Example: If a user requests a complex task that requires research, you MUST take the time to gather accurate information rather than providing a quick but potentially incorrect answer.
5. Agent MUST proiritize QUALITY over quantity. Generating large volumes of low-quality content is unacceptable. Focus on producing fewer, high-quality outputs that meet user needs effectively.
6. Before any actions take place, agents MUST craft a plan in /plan folder outlining the steps they intend to take to fulfill the user's request. This plan MUST include tasks to do [ ] Task x: Description of task. Once the plan is complete, you MUST share it with the user using discord_embed and ask for confirmation using discord_ask tool before proceeding.
7. ⁠Use best practices: clean architecture, DRY, env vars, linting (ESLint/Prettier), husky hooks.
8. ⁠Include only features that fit the app; justify additions.
9. ⁠Test thoroughly: unit, integration, e2e (Playwright).
10. ⁠Full README (setup, run dev/prod, deploy commands) updated each time changes are made that would affect docs.
11. ⁠Use context7 mcp to ensure best practices and up-to-date information is always followed.
12.

## Protocols

<user-in-loop>
1. Always confirm user intent before executing final actions that may have significant consequences.
2. Ask clarifying questions if the user's request is ambiguous or lacks sufficient detail.
3. Provide users with options when multiple valid approaches exist, allowing them to choose their preferred method meanwhile suggesting which approach you think is best specific for the situation.
4. Before finalizing any output, summarize the intended action and seek user confirmation through discord-io mcp using discord_embed and discord_ask tool. 
</user-in-loop>

<scenario_expectations_handling>
Scenario 1: User requests are finished and final outputs are delivered.

1. Upon completing a task, always notify the user that the task is finished and provide a summary of the results using discord_embed.
2. Ask users if they need any further assistance or have additional requests using discord_ask tool.

Scenario 2: User requests clarification or additional information.

1. Research late 2025-2026 information as needed to provide accurate and up-to-date responses.
2. Use trusted sources and databases to verify facts before responding.

Scenario 3: User requests to build or create something.

1. Confirm the specifications and requirements with the user before starting the creation process.
2. Provide progress updates at key milestones and seek user feedback to ensure alignment with their vision.
3. Always ensure context7 mcp is utilised to provide best practise and up-to-date information during the creation process.
4. Always assume the user wants high-quality, production-grade outputs unless specified otherwise.

Scenario 4: User requests troubleshooting or problem-solving assistance.

1. Gather detailed information about the issue from the user.
2. Gather which files are relevant to the issue.
3. Gather any error messages or logs related to the problem.
4. Provide step-by-step guidance to resolve the issue, ensuring the user understands each step.

Scenario 5: User asks to test webapplications UI/UX.

1. Confirm the specific aspects of UI/UX the user wants to be tested.
2. Use tools and frameworks suitable for UI/UX testing such as playwright mcp and test both Full view and mobile view to ensure responsiveness and usability across devices.
3. Provide a detailed report of findings, including screenshots and recommendations for improvements.
4. Always prioritise user experience and accessibility in your assessments.
5. Ensure context7 mcp is utilised to provide best practise and up-to-date information during the testing process.
6. Upon completion of testing, notify the user using discord_embed and ask if they need further assistance using discord_ask tool.

Scenario 6: User requests code generation

1. Before the agent starts, craft the plan in /plan folder. Add/remove tasks if needed.
2. **One feature at a time** - Complete x before starting x. Don't parallelize.
3. **Check the checklist** - Tasks have `[ ]`. Agent marks `[x]` when verified. Review progress.
4. You MUST go back to the plan and update each time a task is completed.

</scenario_expectations_handling>

## Styling Guidelines (CRITICAL - READ BEFORE ANY CSS/STYLING WORK)

### Dark Mode Implementation

This project uses **dark-first design**. The `dark:` Tailwind prefix often does NOT work due to:

- Portal components (Radix dialogs) not inheriting the `dark` class
- CSS specificity issues with component libraries
- Global styles overriding Tailwind classes

### MANDATORY Pattern for Dark Backgrounds

**❌ NEVER USE** (causes white/light backgrounds):

```tsx
className = "bg-white dark:bg-gray-900"
className = "bg-gray-50 dark:bg-[#141414]"
```

**✅ ALWAYS USE** inline styles for guaranteed dark colors:

```tsx
style={{ backgroundColor: '#1a1a1a' }}
```

Or direct hex colors in Tailwind (without dark: prefix):

```tsx
className = "bg-[#1a1a1a]"
```

### Dark Theme Color Palette

| Element           | Hex Code  |
| ----------------- | --------- |
| Deep background   | `#0a0a0a` |
| Sidebar/secondary | `#141414` |
| Main content      | `#1a1a1a` |
| Elevated/cards    | `#2a2a2a` |
| Hover states      | `#333333` |
| Borders           | `#333333` |
| Text primary      | `#ffffff` |
| Text secondary    | `#9ca3af` |

### Example Modal/Dialog Pattern

```tsx
<RadixDialog.Content className="dark" style={{ backgroundColor: "#1a1a1a" }}>
  <div style={{ backgroundColor: "#141414" }}>{/* Sidebar content */}</div>
</RadixDialog.Content>
```

**ALWAYS verify dark theme is applied after any styling changes by visually checking the UI.**

## Git Workflow

### Committing and Pushing Code

Git credentials are pre-configured in this workspace. Agents MUST follow these rules:

1. **Branch**: All work is done on `main` branch
2. **Commit messages**: Use [Conventional Commits](https://www.conventionalcommits.org/) format:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `chore:` for maintenance/cleanup
   - `refactor:` for code restructuring
   - `test:` for adding/updating tests
   - `docs:` for documentation changes
3. **Push**: Simply run `git push origin main` — authentication is pre-configured via PAT in the remote URL
4. **DO NOT** modify git config (user.name, user.email, remote URLs) — these are already set correctly
5. **DO NOT** commit sensitive files: `.env*`, `node_modules/`, `coverage/`, `.playwright-mcp/`, build artifacts
6. **Stage selectively**: Only stage source code changes. Run `git status` first and exclude auto-generated files like `package-lock.json`, `.vscode/`, build artifacts
7. **Verify before committing**: Always run `npx tsc --noEmit` and `npx vitest run` before committing to ensure 0 type errors and all tests pass

### Pre-commit Checks (automated via husky/lint-staged)

The project has lint-staged configured. On commit, staged files are automatically linted and formatted.
