---
title: "KI-gestützte Entwicklung: Wo sie hilft, wo nicht"
permalink: ki-gestuetzte-entwicklung
date: 2026-02-10
description: "Ein ehrlicher Blick auf den Einsatz von LLMs zur Code-Generierung in echten Projekten — was funktioniert, was scheitert und wie man das Beste herausholt."
category: ai
cover: ./cover.png
---

Nach Monaten täglicher Nutzung von KI-Assistenten in Produktions-Codebases habe ich eine differenzierte Sicht entwickelt, die irgendwo zwischen „es wird uns alle ersetzen" und „es ist nur Autocomplete" liegt.

## Wo KI wirklich Zeit spart

**Boilerplate und repetitive Muster.** Den 15. API-Endpoint schreiben, der dem gleichen Schema folgt? KI trifft das perfekt. Sie versteht das Muster aus dem Kontext und generiert korrekten, konsistenten Code in Sekunden.

**Test-Generierung.** Gib ihr eine Funktion und frag nach Randfällen — sie findet oft Szenarien, an die ich nicht sofort gedacht hätte. Nicht immer korrekt, aber ein solider Ausgangspunkt.

**Dokumentation und Kommentare.** Erklären, was komplexer Code tut, JSDoc generieren, README-Abschnitte schreiben. Hier ist die Zeitersparnis dramatisch.

**Übersetzungen und i18n.** Den gleichen Text in drei Sprachen brauchen? KI macht das überraschend gut für technische Inhalte.

## Wo sie an Grenzen stößt

**Architekturentscheidungen.** KI generiert fröhlich Code, der funktioniert, aber architektonisch falsch für deinen Kontext ist. Sie versteht nicht die Constraints deines Systems, die Konventionen deines Teams oder deine Skalierungsanforderungen.

**Debugging komplexer Probleme.** Wenn der Bug mehrere Services umfasst und Timing, State oder Infrastruktur betrifft — da tut sich KI schwer. Sie kann gängige Fixes vorschlagen, aber nicht über dein spezifisches verteiltes System nachdenken.

**Sicherheitskritischer Code.** Authentifizierungsflows, Verschlüsselung, Zugriffskontrolle. KI-generierter Code in diesen Bereichen braucht extrem sorgfältiges Review. Er tendiert dazu, korrekt auszusehen, aber subtile Schwachstellen zu übersehen.

## Mein Workflow

Ich habe mich auf ein Muster eingependelt: **KI entwirft, ich architekturiere.** Ich treffe die strukturellen Entscheidungen, definiere die Interfaces und lasse KI die Implementierung ausfüllen. Dann reviewe ich jede Zeile, als hätte ein Junior-Entwickler sie geschrieben — denn das ist ungefähr das Qualitätsniveau.

Die zentrale Erkenntnis: KI ist ein Multiplikator, kein Ersatz. Ein 10x-Tool für jemanden, der weiß, was er baut, und eine Falle für jemanden, der es nicht weiß.

## Tools die ich nutze

- **Claude Code** für komplexe Refactorings und Änderungen über mehrere Dateien
- **GitHub Copilot** für Inline-Vervollständigungen beim Tippen
- **ChatGPT** für Recherche und Rubber-Ducking bei Architekturentscheidungen

Die besten Ergebnisse kommen durch Spezifität. Vage Prompts produzieren vagen Code. Je mehr Kontext du gibst — dein Tech-Stack, Constraints, bestehende Muster — desto besser das Ergebnis.
