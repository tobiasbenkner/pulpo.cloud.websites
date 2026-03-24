---
title: "Einstieg in GitOps mit ArgoCD"
permalink: einstieg-in-gitops-mit-argocd
date: 2025-11-15
description: "Eine praktische Einführung in GitOps-Prinzipien und wie man ArgoCD für Continuous Delivery auf Kubernetes einrichtet."
category: devops
cover: ./cover.png
---

GitOps hat grundlegend verändert, wie Teams Anwendungen auf Kubernetes deployen. Statt `kubectl apply` vom Laptop oder der CI-Pipeline auszuführen, beschreibt man den gewünschten Zustand in Git — und ein Controller kümmert sich um den Rest.

## Was ist GitOps?

Im Kern ist GitOps eine Sammlung von Praktiken:

1. **Deklarative Konfiguration** — das gesamte System wird als Code beschrieben
2. **Git als Single Source of Truth** — der gewünschte Zustand lebt in einem Git-Repository
3. **Automatische Reconciliation** — ein Agent vergleicht kontinuierlich den Ist-Zustand mit dem Soll-Zustand und korrigiert Abweichungen

Das bedeutet: Deployment ist ein `git push`, Rollback ist ein `git revert`, und Audit ist `git log`.

## ArgoCD einrichten

ArgoCD ist einer der beliebtesten GitOps-Controller für Kubernetes. So kommt man los.

### Installation

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

Nach einer Minute prüfen, ob alles läuft:

```bash
kubectl get pods -n argocd
```

### Die erste Application erstellen

Eine ArgoCD `Application` sagt dem Controller, wo die Manifeste liegen und wohin deployed werden soll:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/your-org/k8s-manifests.git
    targetRevision: main
    path: apps/my-app
  destination:
    server: https://kubernetes.default.svc
    namespace: my-app
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

Der `syncPolicy.automated`-Block ist die Magie — ArgoCD wendet automatisch Änderungen aus Git an und behebt manuellen Drift im Cluster.

## Verzeichnisstruktur

Eine saubere Repository-Struktur ist wichtig. Ich bevorzuge die Trennung von Anwendungs-Manifesten und Infrastruktur:

```
k8s-manifests/
├── apps/
│   ├── frontend/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── ingress.yaml
│   └── backend/
│       ├── deployment.yaml
│       └── service.yaml
└── infra/
    ├── cert-manager/
    └── monitoring/
```

## Warum es funktioniert

Der größte Vorteil, den ich bei GitOps gefunden habe, ist nicht die Automatisierung — es ist die **Sicherheit**. Wenn jede Änderung durch einen Pull Request geht, bekommt man Code Review für Infrastrukturänderungen gratis dazu. Und wenn etwas kaputtgeht, weiß man genau, welcher Commit die Ursache war.

Die Web-UI von ArgoCD gibt außerdem eine Live-Ansicht des Cluster-Zustands, sodass man Sync-Probleme oder ungesunde Pods sofort erkennen kann.

Wer Kubernetes betreibt und noch über CI-Pipelines mit `kubectl apply` deployt — probiert GitOps aus. Der anfängliche Aufwand lohnt sich langfristig.
