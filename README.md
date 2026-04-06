## UPD 07.04.26

Шановна спільното!

На жаль, у відведений адміністрацією каналу час нам не вдалося знайти спільну мову. Наша позиція залишається незмінною: ми діємо відкрито, однак зобов'язані розуміти, кому саме передаємо конфіденційні дані. За наявності офіційного запиту ми готові надати всю необхідну інформацію та доступи відповідним уповноваженим особам.

Разом із тим ми не можемо продовжувати роботу в умовах, що виходять за межі правового поля держави та створюють загрозу для всіх нас.

У зв'язку з цим ми тимчасово призупиняємо роботу всіх інструментів, якими керуємо, до повного врегулювання ситуації.

Дякуємо за розуміння.

Слава Україні!

### English

Dear community!

Unfortunately, within the time allotted by the channel administration, we were unable to find common ground. Our position remains unchanged: we act openly, but we are obliged to understand exactly to whom we are transferring confidential data. If there is an official request, we are ready to provide all necessary information and access to the relevant authorized persons.

At the same time, we cannot continue working under conditions that fall outside the legal framework of the state and create a threat to all of us.

In this regard, we are temporarily suspending the operation of all tools we manage until the situation is fully resolved.

Thank you for your understanding.

Glory to Ukraine!

## UPD 04.04.26

Привіт Спільното!

Вірні принципу відкритості, який завжди був основою нашої роботи, ми підготували невеликий інструмент-аудитор і надаємо до нього публічний доступ. Інструмент дозволяє в режимі реального часу бачити поточні цілі атак, стежити за їх статусом, тобто кожен учасник може самостійно контролювати і верифікувати те, що відбувається. Жодних закритих кімнат, жодних таємниць.

Слід підкреслити, що розміщення публікація даного інструменту є вимушеним заходом, який певною мірою надасть противнику змогу відстежувати наші удари що не є добре але слова адміністрації каналу IT Армія не залишили вибору окрім того щоб спростувати їх дією. Втім, варто додати, що ця можливість існувала завжди, і ми приймаємо це рішення усвідомлено, з чітким розумінням пов'язаних ризиків.

Технічно аудитор перехоплює вихідний трафік від mhddos_proxy, distress або будь-якої іншої програми та показує таблицю з усіма IP-адресами, на які надсилаються запити, кількість пакетів і обсяг трафіку. Кожен IP - це посилання на ipinfo.io, де можна одразу перевірити кому він належить. Запустити можна однією командою в Docker, а якщо є сумніви щодо того що відбувається всередині - достатньо скопіювати Dockerfile у будь-який LLM і попросити пояснити.

ІНСТРУМЕНТ ДЛЯ НЕЗАЛЕЖНОГО АУДИТУ ЦІЛЕЙ ЗНАХОДИТЬСЯ ТУТ: https://github.com/porthole-ascend-cinnamon/targets_audit

Кожен охочий, самостійно або за допомогою будь-якого LLM, може переконатися що для проведення цього аудиту достатньо мінімальної технічної компетентності. Жодної потреби лізти у чутливий код не було і немає, особливо тим, хто очевидно в ньому нічого не тямить, адже саме нездатність зробити цей аудит самостійно і спонукала до вимоги повного доступу. Попри це, адміністратор групи IT Армії продовжував наполягати на повному доступі до технічної інфраструктури, ігноруючи всі наведені аргументи.

Так, ми формально закрили відкритий доступ до цілей свого часу, але завжди чітко розуміли що це зупинить лише випадкових людей. До таких, очевидно, і належить згаданий адміністратор. Технічно приховати подібні речі неможливо, що ми і демонструємо зараз. І, на жаль, цим давно користувалися вороги.

Хто насправді стоїть за операціями?
Команда розробки та розвідки, яка відповідала за всі операції останні чотири роки, не знає жодної організаційної структури під назвою "IT Армія" окрім 1–2 адмінів чату, які завжди позиціонували себе як таких самих волонтерів. Тому заяви на кшталт "ми не можемо переконатися" розбиваються об просту реальність: жодного "ми" не існує. IT Армія завжди була розподіленою волонтерською спільнотою. Адміни каналу не мають жодного відношення ні до організації атак, ні до підтримки інструментів.

Адмін каналу зажадав повного доступу як до розвідки, так і до розробників, без жодного зрозумілого обґрунтування. Перед десятком розробників, які в ITAU з самого початку, він не зміг пояснити своїх намірів. Натомість пригрозив оголосити нам недовіру і самостійно зібрати нову команду. Ми вважаємо, що спільнота має знати про це.

Закиди щодо непрозорості це не більше ніж вигадка. Інструмент перед вами, цілі перед вами. Аудит доступний кожному прямо зараз.

Тож ми заохочуємо всіх до використання аудитору та підтримки наших ідеалів, чекаємо на ваші відгуки та коментарі.

Відкритість - це не слабкість. Це наша сила.

### English

Hello Community!

Remaining faithful to the principle of openness, which has always been the foundation of our work, we have prepared a small audit tool and are making it publicly available. This tool allows anyone to see the current attack targets in real time and monitor their status, meaning every participant can independently control and verify what is happening. No closed rooms, no secrets.

It should be emphasized that the publication of this tool is a forced measure which, to some extent, will allow the enemy to track our strikes, and that is not good. However, the words of the IT Army channel administration left us no choice but to refute them through action. At the same time, it is worth adding that this possibility has always existed, and we are making this decision consciously, with a clear understanding of the risks involved.

Technically, the auditor intercepts outgoing traffic from `mhddos_proxy`, `distress`, or any other program and displays a table with all IP addresses to which requests are being sent, along with the number of packets and traffic volume. Each IP is a link to `ipinfo.io`, where you can immediately verify who it belongs to. It can be launched with a single Docker command, and if there are doubts about what happens inside, it is enough to copy the Dockerfile into any LLM and ask for an explanation.

THE TOOL FOR INDEPENDENT AUDITING OF TARGETS IS AVAILABLE HERE: https://github.com/porthole-ascend-cinnamon/targets_audit

Anyone interested, either independently or with the help of any LLM, can verify that only minimal technical competence is required to carry out this audit. There was never any need to dig into sensitive code, especially for those who obviously do not understand it, because it was precisely the inability to perform this audit independently that prompted the demand for full access. Despite this, the administrator of the IT Army group continued insisting on full access to the technical infrastructure, ignoring all of the arguments presented.

Yes, we formally closed open access to the targets at one point, but we always clearly understood that this would stop only random people. That administrator clearly belongs to that category. Technically, it is impossible to hide such things, and that is exactly what we are demonstrating now. Unfortunately, the enemy has long been taking advantage of this.

Who is really behind the operations?
The development and intelligence team that has been responsible for all operations over the past four years knows of no organizational structure called "IT Army" except for 1-2 chat admins who have always presented themselves as ordinary volunteers. Therefore, statements such as "we cannot verify" collapse against a simple reality: there is no such "we". IT Army has always been a distributed volunteer community. The channel admins have nothing to do with organizing attacks or maintaining the tools.

The channel admin demanded full access to both intelligence and developers without any clear justification. In front of a dozen developers who have been in ITAU from the very beginning, he could not explain his intentions. Instead, he threatened to declare no confidence in us and independently assemble a new team. We believe the community deserves to know this.

Claims of non-transparency are nothing more than fiction. The tool is before you, the targets are before you. The audit is available to everyone right now.

So we encourage everyone to use the auditor and support our ideals, and we look forward to your feedback and comments.

Openness is not weakness. It is our strength.

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
