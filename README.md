# Announcement

## Українською

УВАГА! ⚠️

Утіліти IT ARMY, а також команда розвідки в повному складі залишаються вірними патріотами України, які працюють проти ворога кожен день. Всі розвідники і розробники утіліт, які працювали з вами всі 4+ років, залишаються єдиними у своїй позиції, без винятку.

Інформація про компрометацію нашої команди є ініціативою адміністратора TG-каналу, який, спираючись на непідтверджені зв'язки з Мінцифри, намагався отримати доступ до чутливого коду та конфігурації під виглядом необхідного аудиту, хоча багато років він цього аудиту не потребував.

Оскільки ця особа не підтвердила ані організацію, яку вона представляє, ані мету своїх потреб, ми були вимушені відмовити задля безпеки. Ми інформуємо вас через утіліти, бо не маємо доступу до офіційного каналу.

Якщо ви сумніваєтеся в поточних цілях, ви завжди можете подивитися, куди спрямовано трафік. Ми просимо вас не зупиняти сервери, оскільки робота продовжується, і від адміністратора TG-каналу ви не отримаєте правдивої інформації.

Скоріше за все, ми будемо створювати новий канал. Очікуйте нову інформацію через утіліти.

Дякуємо за довіру. Слава Україні!

## English

ATTENTION! ⚠️

The IT ARMY utilities, as well as the entire intelligence team, remain loyal patriots of Ukraine who work against the enemy every day. All intelligence members and utility developers who have worked with you for 4+ years remain united in their position, without exception.

The information about our team being compromised is an initiative of the TG channel administrator who, citing unconfirmed connections to the Ministry of Digital Transformation, attempted to gain access to sensitive code and configuration under the guise of a necessary audit, even though for many years no such audit had been required.

Since this person did not confirm either the organization they represent or the purpose of their requests, we were forced to refuse for security reasons. We are informing you through the utilities because we do not have access to the official channel.

If you have doubts about the current goals, you can always inspect where the traffic is being directed. We ask you not to stop the servers, because the work is ongoing, and you will not receive truthful information from the TG channel administrator.

Most likely, we will create a new channel. Please wait for new information through the utilities.

Thank you for your trust. Glory to Ukraine!

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
