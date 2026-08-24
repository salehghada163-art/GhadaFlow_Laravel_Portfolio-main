@extends('layouts.app')

@section('title', 'Contact | GhadaFlow')

@section('content')

<div class="section contact-page">

<div class="container">

<div class="section-heading">

<span class="section-number">07</span>

<div>

<p class="section-kicker" data-i18n="contact.kicker">
    Contact
</p>

<h2 data-i18n="contact.title">
    Let's work together.
</h2>

</div>

</div>


<p
    class="project-detail-description"
    data-i18n="contact.subtitle"
>
    Have a project or opportunity in mind? Send a message and I'll get back to you.
</p>


<div class="contact-grid">


<!-- Contact Information -->

<article class="contact-info-card">

<p
    class="contact-info-kicker"
    data-i18n="contact.infoTitle"
>
    Contact Info
</p>


<h3 data-i18n="contact.connectTitle">
    Let's connect.
</h3>


<p
    class="contact-info-description"
    data-i18n="contact.connectDescription"
>
    You can contact me directly through email or connect with me on LinkedIn and GitHub.
</p>


<div class="contact-links">


<a
    class="contact-info-link"
    href="https://outlook.live.com/mail/0/deeplink/compose?to=ghadacareer75%40outlook.com"
    target="_blank"
    rel="noopener noreferrer"
>

<span class="contact-info-icon">
    ✉
</span>

<span>

<small data-i18n="nav.email">
    Email
</small>

<strong>
    ghadacareer75@outlook.com
</strong>

</span>

</a>


<a
    class="contact-info-link"
    href="https://www.linkedin.com/in/ghada-saleh-altuwijri-9971a83a8/"
    target="_blank"
    rel="noopener noreferrer"
>

<span class="contact-info-icon">
    in
</span>

<span>

<small data-i18n="nav.linkedin">
    LinkedIn
</small>

<strong>
    Ghada Saleh Al-Towajri
</strong>

</span>

</a>


<a
    class="contact-info-link"
    href="https://github.com/ghadacareer65-ui"
    target="_blank"
    rel="noopener noreferrer"
>

<span class="contact-info-icon">
    GH
</span>

<span>

<small data-i18n="nav.github">
    GitHub
</small>

<strong>
    ghadacareer65-ui
</strong>

</span>

</a>


</div>

</article>


<!-- Contact Form -->

<article class="contact-card">


@if (session('status'))

<div class="form-alert form-alert-success">
    {{ session('status') }}
</div>

@endif


@if ($errors->any())

<div class="form-alert form-alert-error">
    {{ __('Please fix the errors below and try again.') }}
</div>

@endif


<form
    method="POST"
    action="{{ route('contact.submit') }}"
    novalidate
>

@csrf


<div class="form-group">

<label
    for="name"
    data-i18n="contact.nameLabel"
>
    Name
</label>

<input
    class="form-input"
    type="text"
    id="name"
    name="name"
    value="{{ old('name') }}"
    autocomplete="name"
    required
>

@error('name')

<p class="form-error">
    {{ $message }}
</p>

@enderror

</div>


<div class="form-group">

<label
    for="email"
    data-i18n="contact.emailLabel"
>
    Email
</label>

<input
    class="form-input"
    type="email"
    id="email"
    name="email"
    value="{{ old('email') }}"
    autocomplete="email"
    required
>

@error('email')

<p class="form-error">
    {{ $message }}
</p>

@enderror

</div>


<div class="form-group">

<label
    for="subject"
    data-i18n="contact.subjectLabel"
>
    Subject
</label>

<input
    class="form-input"
    type="text"
    id="subject"
    name="subject"
    value="{{ old('subject') }}"
    required
>

@error('subject')

<p class="form-error">
    {{ $message }}
</p>

@enderror

</div>


<div class="form-group">

<label
    for="message"
    data-i18n="contact.messageLabel"
>
    Message
</label>

<textarea
    class="form-textarea"
    id="message"
    name="message"
    required
>{{ old('message') }}</textarea>

@error('message')

<p class="form-error">
    {{ $message }}
</p>

@enderror

</div>


<button
    class="form-submit"
    type="submit"
    data-i18n="contact.send"
>
    Send Message
</button>


</form>

</article>

</div>

</div>

</div>

@endsection