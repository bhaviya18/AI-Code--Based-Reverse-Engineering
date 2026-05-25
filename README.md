# AI Codebase Reverse Engineering

AI-assisted codebase reverse engineering system that analyzes ZIP projects and GitHub repositories using deterministic static analysis and AI-generated explanations.

---

# Features

- ZIP project analysis
- GitHub repository analysis
- Framework detection
- Language detection
- Entry point identification
- Dependency mapping
- Workflow reconstruction
- Architecture analysis
- AI-generated onboarding summaries
- Persistent saved reports
- Downloadable JSON analysis reports

---

# Tech Stack

Backend:
- Python
- FastAPI

Frontend:
- HTML
- CSS
- JavaScript

AI:
- Google Gemini API

---

# Project Structure

```bash
backend/
frontend/
storage/
notes/
```

---

# How It Works

1. User uploads a ZIP file or GitHub repository URL
2. Backend scans project files and folders
3. Languages and frameworks are detected
4. Dependencies and workflows are reconstructed
5. AI generates architecture explanations
6. Results are displayed in a human-readable UI

---

# Screenshots

Add screenshots here after deployment.

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-codebase-reverse-engineering.git
```

## Move Into Project

```bash
cd ai-codebase-reverse-engineering
```

## Create Virtual Environment

### Windows

```bash
python -m venv venv
```

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# Run Backend

```bash
python -m uvicorn backend.main:app --reload
```

---

# Open Application

```text
http://127.0.0.1:8000
```

---

# Example Capabilities

- Analyze React projects
- Analyze Python projects
- Analyze Java projects
- Detect frameworks like React, Vite, Flask, Django
- Generate onboarding summaries for new developers

---

# Goals

This project focuses on:
- deterministic analysis
- reducing AI hallucinations
- beginner-friendly reverse engineering
- modular architecture
- explainable code analysis

---

# Future Improvements

- Better GitHub repository detection
- More framework support
- Markdown/PDF export
- Improved workflow tracing
- Better dependency visualization

---

# Author

Bhaviya Talwar
```
