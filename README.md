# Task Manager (React + Vite)

A simple and beginner-friendly task manager web app built with React and Vite.

## Overview

This app helps you keep track of daily tasks with a clean UI. Tasks are saved in your browser using LocalStorage, so they remain available after refresh.

## Features

- Add tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete or incomplete
- Filter tasks by **All**, **Active**, and **Completed**
- Search tasks by text
- Persistent storage with LocalStorage
- Responsive layout for mobile and desktop

## Tech Stack

- React (hooks)
- Vite
- JavaScript (ES modules)
- CSS
- ESLint (Vite default setup)

## Project Structure

```text
src/
  components/
    TaskFilters.jsx
    TaskInput.jsx
    TaskItem.jsx
    TaskList.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Setup & Run

From the project root:

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Other Scripts

```bash
npm run lint
npm run build
npm run preview
```
