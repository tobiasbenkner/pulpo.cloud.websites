---
title: "Dev Containers: Reproduzierbare Entwicklungsumgebungen mit Docker"
permalink: dev-containers-docker
date: 2026-03-05
description: "Wie man mit VS Code Dev Containers und Docker Compose konsistente, teilbare Entwicklungsumgebungen erstellt, die einfach funktionieren."
category: tooling
---

„Funktioniert auf meinem Rechner" ist der älteste Witz in der Software-Entwicklung — und Dev Containers sind das Nächste, was wir an einer echten Lösung haben.

## Das Problem

Jeder Entwickler im Team hat ein leicht anderes Setup. Verschiedene Node-Versionen, verschiedene Python-Umgebungen, verschiedene Datenbank-Konfigurationen. Das Onboarding eines neuen Teammitglieds dauert Tage mit „installier dies, konfiguriere das, oh warte, du brauchst diese Version."

## Dev Containers als Lösung

Ein Dev Container ist ein Docker-Container, der speziell für die Entwicklung konfiguriert ist. VS Code (und andere Editoren) können dein Projekt innerhalb des Containers öffnen und bieten dir:

- **Exakt die gleiche Umgebung** für jeden Entwickler
- **Vorinstallierte Tools** — kein „bitte installiere Go 1.22" mehr
- **Isolierte Abhängigkeiten** — keine Konflikte zwischen Projekten
- **Onboarding in Minuten** — klonen, öffnen, fertig

## Ein praktisches Setup

Hier ist eine `.devcontainer/devcontainer.json` für ein typisches Node.js-Projekt:

```json
{
  "name": "Mein Projekt",
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

Kombiniert mit einer `docker-compose.yml`, die deine Datenbank enthält:

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

## Tipps aus dem Produktionseinsatz

**Nutze Volume-Mounts klug.** Das `:cached`-Flag unter macOS macht einen enormen Unterschied für die Dateisystem-Performance.

**Baue deine Images vor.** Installiere nicht alles in `postCreateCommand`. Packe gängige Tools in das Docker-Image, damit der Container-Start schnell ist.

**Formatter-Config einschließen.** Wenn ESLint und Prettier im Container mit gepinnten Versionen laufen, verschwinden Formatierungs-Debatten.

**GPU-Passthrough nicht vergessen.** Für ML-Arbeit unterstützen Dev Containers GPU-Zugriff über das `--gpus`-Flag.

## Wann man sie nicht nutzen sollte

Für einfache Projekte mit minimalen Abhängigkeiten fügen Dev Containers unnötige Komplexität hinzu. Eine `.tool-versions`-Datei mit asdf oder mise reicht möglicherweise aus. Nutze Dev Containers, wenn der Setup-Aufwand hoch und das Team größer als zwei Personen ist.
