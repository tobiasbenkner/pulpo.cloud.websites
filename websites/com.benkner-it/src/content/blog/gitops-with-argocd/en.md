---
title: "Getting Started with GitOps and ArgoCD"
permalink: gitops-with-argocd
date: 2025-11-15
description: "A practical introduction to GitOps principles and how to set up ArgoCD for continuous delivery on Kubernetes."
category: devops
cover: ./cover.png
---

GitOps has fundamentally changed how teams deploy applications to Kubernetes. Instead of running `kubectl apply` from your laptop or CI pipeline, you describe the desired state in Git — and a controller takes care of the rest.

## What is GitOps?

At its core, GitOps is a set of practices:

1. **Declarative configuration** — your entire system is described as code
2. **Git as the single source of truth** — the desired state lives in a Git repository
3. **Automated reconciliation** — an agent continuously compares the actual state with the desired state and corrects any drift

This means that deploying is a `git push`, rollback is a `git revert`, and audit is `git log`.

## Setting up ArgoCD

ArgoCD is one of the most popular GitOps controllers for Kubernetes. Here's how to get started.

### Installation

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

After a minute, check that everything is running:

```bash
kubectl get pods -n argocd
```

### Creating your first Application

An ArgoCD `Application` tells the controller where to find your manifests and where to deploy them:

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

The `syncPolicy.automated` block is where the magic happens — ArgoCD will automatically apply changes from Git and fix any manual drift in the cluster.

## Directory structure

A clean repository layout matters. I prefer keeping application manifests separate from infrastructure:

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

## Why it works

The biggest advantage I've found with GitOps is not the automation — it's the **confidence**. When every change goes through a pull request, you get code review for infrastructure changes for free. And if something breaks, you know exactly which commit caused it.

ArgoCD's web UI also gives you a live view of your cluster state, making it easy to spot sync issues or unhealthy pods at a glance.

If you're running Kubernetes and still deploying via CI pipelines with `kubectl apply`, give GitOps a try. The initial setup is worth the long-term payoff.
