---
title: "Dev Containers: Reproducible Development Environments with Docker"
permalink: dev-containers-docker
date: 2026-03-05
description: "How to use VS Code Dev Containers and Docker Compose to create consistent, shareable development environments that just work."
category: tooling
cover: ./cover.png
---

"Works on my machine" is the oldest joke in software development — and Dev Containers are the closest thing we have to a real solution.

## The problem

Every developer on your team has a slightly different setup. Different Node versions, different Python environments, different database configurations. Onboarding a new team member takes days of "install this, configure that, oh wait you need this version."

## Dev Containers to the rescue

A Dev Container is a Docker container configured specifically for development. VS Code (and other editors) can open your project inside the container, giving you:

- **Exact same environment** for every developer
- **Pre-installed tools** — no more "please install Go 1.22"
- **Isolated dependencies** — no conflicts between projects
- **Onboarding in minutes** — clone, open, done

## A practical setup

Here's a `.devcontainer/devcontainer.json` for a typical Node.js project:

```json
{
  "name": "My Project",
  "dockerComposeFile": "docker-compose.yml",
  "service": "app",
  "workspaceFolder": "/workspace",
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "bradlc.vscode-tailwindcss"
      ]
    }
  },
  "postCreateCommand": "pnpm install"
}
```

Combined with a `docker-compose.yml` that includes your database:

```yaml
services:
  app:
    build: .
    volumes:
      - ..:/workspace:cached
    command: sleep infinity
  db:
    image: postgres:16
    environment:
      POSTGRES_DB: myapp
      POSTGRES_PASSWORD: dev
```

## Tips from production use

**Use volume mounts wisely.** The `:cached` flag on macOS makes a huge difference for file system performance.

**Pre-build your images.** Don't install everything in `postCreateCommand`. Bake common tools into the Docker image so container startup is fast.

**Include your formatter config.** When ESLint and Prettier run inside the container with pinned versions, formatting debates disappear.

**Don't forget GPU passthrough.** If you're doing ML work, Dev Containers support GPU access via the `--gpus` flag.

## When not to use them

For simple projects with minimal dependencies, Dev Containers add unnecessary complexity. A `.tool-versions` file with asdf or mise might be enough. Use Dev Containers when the setup cost is high and the team is larger than two people.
