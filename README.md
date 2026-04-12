# IT Army Kit (Win x86)

Windows x86 / Windows 7 compatible branch of IT Army Kit.

This branch contains the Electron desktop app adapted for legacy 32-bit Windows systems with `DISTRESS` support. `MHDDOS_PROXY` is not supported in this repository.

## Current State

- App version: `1.6.3`
- Theme system: `Light`, `Dark`
- Modes: `Default`, `Easter`, `Matrix`
- `Matrix` mode unlocks only after solving the built-in easter egg
- Existing users updating to `1.6.3` get `Easter` mode enabled by default once

## Features

- Electron + Quasar + Vue 3 desktop app
- Isolated preload bridge with `window.*API`
- Distress module management and execution
- Scheduler with interval-based launch windows
- Built-in statistics, logs, and system status widgets
- Activeness integration
- Persistent profile data and stability diagnostics

## Requirements

- Node.js `>= 20`
- npm `>= 6.13.4`

## Development

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

Lint the project:

```bash
npm run lint
```

Build the app:

```bash
npm run build
```

## Project Structure

- `src/` - Quasar/Vue renderer application
- `src-electron/` - Electron main process, preload bridge, IPC handlers
- `lib/module/` - Distress wrapper and shared module runtime types
- `lib/utils/` - shared utilities, stability logging, traffic helpers
- `public/` - static assets

## Runtime Data

The application stores profile data in:

```text
%APPDATA%\ITArmyKitProfile
```

Important files:

- `settings.json` - user settings
- `engine.state.json` - persisted execution engine state and statistics totals
- `stability.log` - crash/recovery diagnostics

## Architecture

- Renderer: Quasar/Vue UI
- Appearance layer: unified theme/mode system for Light, Dark, Easter, and Matrix presentation
- Preload: isolated IPC bridge exposed through `window.*API`
- Main process: window lifecycle, tray behavior, settings, scheduler, execution engine
- Module layer: starts `DISTRESS`, parses its statistics, reports them to the execution engine

## Notes

- This repository intentionally differs from the main branch where functionality depends on `MHDDOS_PROXY`
- The scheduler and execution settings in this branch are limited to `DISTRESS`
- The README reflects the current x86 branch state, not the full-featured main branch

## Troubleshooting

If the app crashes or does not recover correctly, inspect:

- `%APPDATA%\ITArmyKitProfile\stability.log`
- `%APPDATA%\ITArmyKitProfile\engine.state.json`
