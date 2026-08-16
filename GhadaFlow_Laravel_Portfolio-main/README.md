# GhadaFlow Portfolio

## Description

GhadaFlow is the personal portfolio website of **Ghada Saleh Al-Towajri**, a Web
Developer based in Buraidah, Saudi Arabia. It presents her education,
professional experience, technical projects (UniTour, Rafeed, the Smart
Support Assistant MVP, and Share Your Opinion), certificates, skills, and
volunteer experience, in both English and Arabic (with RTL support). The
project has been rebuilt as a real Laravel application on top of the
original design, content and assets.

## Features

- Built on **Laravel 12** (routes, controllers, Blade layouts/views).
- Multi-page structure: Home, Certificates, Project detail, and Contact —
  navigated with real Laravel routes.
- Fully **responsive** design (mobile, tablet, laptop, desktop).
- **Dark Mode** and **Light Mode** with a visible toggle, persisted in
  `localStorage`, applied on every page.
- Bilingual **English / Arabic** interface with LTR/RTL switching.
- **Projects** section with video demos and full project detail pages.
- **Certificates** page, grouped by issuing organization, with clickable
  links.
- Working **GitHub** and **LinkedIn** buttons in the top bar, plus a
  clickable **email** link that opens Outlook Web's compose window
  addressed to `ghadacareer75@outlook.com`.
- A real **Contact Form** (name, email, subject, message) with Laravel
  server-side validation, success/error feedback, and email delivery via
  Laravel Mail to `ghadacareer75@outlook.com`.

## Technologies

- PHP 8.2+ / Laravel 12
- Blade templates
- Vanilla HTML, CSS and JavaScript for the front-end presentation layer
  (unchanged rendering pipeline from the original project, now served
  through Laravel)
- Laravel Mail (SMTP)

## Project Structure

```
app/Http/Controllers/   Page, Project, Certificate and Contact controllers
app/Http/Requests/      ContactFormRequest (server-side validation)
app/Mail/               ContactFormMail (contact form email)
resources/views/        Blade layout + Home / Projects / Certificates / Contact views
resources/views/emails/ Contact form email template
routes/web.php          All application routes
public/css/             style.css, responsive.css (original design) + theme.css (dark/light)
public/js/              data.js (portfolio content), translations.js (i18n), app.js (rendering + interactivity)
public/videos/          Project demo videos
```

`public/js/data.js` remains the single source of truth for portfolio
content (projects, certificates, skills, experience, etc., in both
languages) and is rendered client-side, exactly as in the original
project, to preserve the existing design and behavior. Laravel supplies
the real page structure, routing, and the server-side Contact Form.

## Framework Version

This project targets **Laravel 12** (`laravel/framework: ^12.0`) on **PHP
8.2+**. Laravel 12 is the newest Laravel major version whose minimum PHP
requirement is 8.2 — Laravel 13 requires PHP 8.3+, and Laravel 11's
security-support window closed in March 2026, which is why Composer's
audit/advisory tooling flags it. Laravel 12 is a maintenance-focused
release on top of 11 with minimal breaking changes, and the application
code here (routes, controllers, Blade views, `bootstrap/app.php`) needed no
changes to work under it.

There is **no `composer.lock` committed**. A lock file has to be produced
by Composer actually resolving package versions and checksums against
Packagist — hand-writing one would just be a fake file that could break
your install or give false confidence. Run `composer install` once
locally (with network access) and Composer will generate a real,
trustworthy `composer.lock` for you; commit that file afterward so your
team and any deployment install the exact same resolved versions.

## Installation

```bash
composer install
cp .env.example .env
php artisan key:generate
```

## Environment Configuration

Copy `.env.example` to `.env` and fill in real values locally (never commit
`.env`):

- `APP_URL` — the URL the app is served from.
- `MAIL_MAILER`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`,
  `MAIL_ENCRYPTION` — Outlook/Microsoft SMTP settings used to send Contact
  Form messages: `smtp-mail.outlook.com`, port `587`, encryption `tls`,
  username `ghadacareer75@outlook.com`, and an Outlook **App Password** as
  `MAIL_PASSWORD` (never the real account password, and never committed —
  `.env.example` only ships placeholders).
- `MAIL_FROM_ADDRESS` / `MAIL_FROM_NAME` — the sender identity on outgoing
  mail.
- `MAIL_CONTACT_TO` — the inbox that receives every submission:
  `ghadacareer75@outlook.com`.

## Contact & Email

- **Portfolio email:** `ghadacareer75@outlook.com` — this is the only
  address used anywhere in the project.
- **Top-bar Email link** opens Outlook Web's compose window with the
  recipient pre-filled (`https://outlook.live.com/mail/0/deeplink/compose?to=ghadacareer75%40outlook.com`),
  falling back to a `mailto:ghadacareer75@outlook.com` link if the popup is
  blocked.
- **Contact Form** (`/contact`) is handled entirely by Laravel Mail/SMTP —
  no JavaScript or third-party form service. Configure the Outlook SMTP
  credentials above in `.env` for it to actually deliver mail.

## Run Locally

```bash
php artisan serve
```

Then open `http://127.0.0.1:8000`.

## Contact Form

The Contact page (`/contact`) submits to a Laravel route that validates the
input (name, email, subject, message are all required and the email must
be a valid address), then sends an email through Laravel Mail using the
SMTP settings from `.env`. The visitor's address is set as the `Reply-To`
header, so replying to the notification email replies straight to them. If
sending fails, the form shows a friendly error instead of a blank failure.

## Project Videos

Demo videos live in `public/videos/`. To add or replace a project's demo
video, drop the file into that folder and update the `video` path for that
project in `public/js/data.js`.

## GitHub

Repository URL: _add your GitHub repository URL here after creating it._

## Live Demo

Deployed Portfolio URL: https://dry-forest-003c.ghadacareer65.workers.dev/
