# IT Army Kit (Win x86)

Windows x86 / Windows 7 compatible branch of IT Army Kit.

This repository contains the x86 Electron build with Distress support. `MHDDOS_PROXY` is not supported in this branch.

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

- `src/`: Quasar/Vue renderer application
- `src-electron/`: Electron main process, preload bridge, IPC handlers
- `lib/module/`: external module wrappers and statistics parsing
- `lib/utils/`: shared utilities, including stability logging and traffic unit conversion

## Runtime Data

The app stores its profile data under:

```text
%APPDATA%\ITArmyKitProfile
```

Important files:

- `settings.json`: user settings
- `engine.state.json`: persisted execution engine state and totals
- `stability.log`: crash/recovery diagnostics

## Architecture

- Renderer: Quasar/Vue UI
- Preload: isolated IPC bridge exposed on `window.*API`
- Main process: window lifecycle, tray behavior, settings, scheduler, execution engine
- Module layer: starts Distress, parses its statistics, reports them to the execution engine

## Troubleshooting

If the app window crashes or fails to recover, inspect:

- `%APPDATA%\ITArmyKitProfile\stability.log`

If Distress does not start on older Windows systems, verify that the required Microsoft Visual C++ x86 runtime is installed.
