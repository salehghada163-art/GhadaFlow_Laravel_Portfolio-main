@extends('layouts.app')

@section('title', 'GhadaFlow | Web Developer')
@section('nav_home', 'active')

@section('content')

<section class="hero" id="home">
    <div class="hero-grid"></div>
    <div class="hero-orb one"></div>
    <div class="hero-orb two"></div>

    <div class="container hero-content">

        <div class="hero-copy">

            <div class="eyebrow">
                <span class="eyebrow-dot"></span>
                <span data-i18n="hero.eyebrow">Web Developer</span>
            </div>

            <h1 data-i18n="hero.name">
                Ghada Saleh Al-Towajri
            </h1>

            <h2 data-i18n="hero.title">
                Web Developer
            </h2>

            <p data-i18n="hero.headline">
                Web Developer focused on building modern web products and exploring AI-powered solutions.
            </p>

            <div class="hero-meta">

                <span data-i18n="hero.location">
                    Buraidah, Saudi Arabia
                </span>

                <a
                    class="hero-email-link"
                    href="mailto:ghadacareer75@outlook.com"
                    data-i18n="hero.email"
                    aria-label="Send email to Ghada"
                >
                    ghadacareer75@outlook.com
                </a>

            </div>

        </div>

        <div class="hero-visual">

            <div class="hero-card">

                <div class="hero-card-head">
                    <span>portfolio.js</span>

                    <div class="window-dots">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>

                <div class="code-panel">

                    <div>
                        <span class="code-key">const</span> developer = {
                    </div>

                    <div>
                        &nbsp;&nbsp;name:
                        <span class="code-string">"Ghada"</span>,
                    </div>

                    <div>
                        &nbsp;&nbsp;role:
                        <span class="code-string">"Web Developer"</span>,
                    </div>

                    <div>
                        &nbsp;&nbsp;focus:
                        <span class="code-string">"Web + AI"</span>
                    </div>

                    <div>
                        };
                    </div>

                    <div class="code-footer">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Python</span>
                        <span>PHP</span>
                    </div>

                </div>

            </div>

        </div>

    </div>
</section>


<section class="section" id="about">

    <div class="container">

        <div class="section-heading">
            <span class="section-number">01</span>

            <div>
                <p class="section-kicker" data-i18n="sections.about.kicker">
                    About
                </p>

                <h2 data-i18n="sections.about.title">
                    A developer focused on useful digital experiences.
                </h2>
            </div>
        </div>

        <div class="about-grid">

            <div class="about-text">
                <p data-i18n="about.description"></p>
            </div>

            <article class="education-card">

                <p class="card-label" data-i18n="about.educationLabel">
                    Education
                </p>

                <h3 data-i18n="education.university">
                    Qassim University
                </h3>

                <p data-i18n="education.college">
                    Applied College
                </p>

                <div class="education-details">

                    <div>
                        <span data-i18n="education.qualificationLabel">
                            Qualification
                        </span>

                        <strong data-i18n="education.qualification">
                            Diploma
                        </strong>
                    </div>

                    <div>
                        <span data-i18n="education.majorLabel">
                            Major
                        </span>

                        <strong data-i18n="education.major">
                            Programming and Computer Science
                        </strong>
                    </div>

                    <div>
                        <span data-i18n="education.departmentLabel">
                            Department
                        </span>

                        <strong data-i18n="education.department">
                            Web Development
                        </strong>
                    </div>

                    <div>
                        <span data-i18n="education.graduationLabel">
                            Graduation
                        </span>

                        <strong data-i18n="education.graduation">
                            2026
                        </strong>
                    </div>

                    <div>
                        <span data-i18n="education.gpaLabel">
                            GPA
                        </span>

                        <strong data-i18n="education.gpa">
                            4.62 / 5.00
                        </strong>
                    </div>

                </div>

            </article>

        </div>

    </div>

</section>


<section class="section section-muted" id="experience">

    <div class="container">

        <div class="section-heading">
            <span class="section-number">02</span>

            <div>
                <p class="section-kicker" data-i18n="sections.experience.kicker">
                    Experience
                </p>

                <h2 data-i18n="sections.experience.title">
                    Practical experience in web development and AI.
                </h2>
            </div>
        </div>

        <div class="experience-list">

            <article class="experience-card">

                <div class="experience-top">

                    <div>

                        <p
                            class="experience-company"
                            data-i18n="experience.kafaat.organization"
                        ></p>

                        <h3
                            data-i18n="experience.kafaat.position"
                        ></h3>

                        <p
                            class="experience-role"
                            data-i18n="experience.kafaat.description"
                        ></p>

                    </div>

                    <span
                        class="experience-status"
                        data-i18n="experience.kafaat.status"
                    ></span>

                </div>

                <div class="experience-meta">

                    <span data-i18n="experience.kafaat.period"></span>

                    <span data-i18n="experience.kafaat.location"></span>

                    <span data-i18n="experience.kafaat.setting"></span>

                </div>

                <ul
                    class="experience-responsibilities"
                    id="kafaatResponsibilities"
                ></ul>

            </article>


            <article class="experience-card">

                <div class="experience-top">

                    <div>

                        <p
                            class="experience-company"
                            data-i18n="experience.ibm.organization"
                        ></p>

                        <h3
                            data-i18n="experience.ibm.role"
                        ></h3>

                        <p
                            class="experience-role"
                            data-i18n="experience.ibm.description"
                        ></p>

                    </div>

                </div>

                <div class="experience-meta">

                    <span data-i18n="experience.ibm.period"></span>

                </div>

            </article>

        </div>

    </div>

</section>


<section class="section" id="projects">

    <div class="container">

        <div class="section-heading">

            <span class="section-number">03</span>

            <div>

                <p
                    class="section-kicker"
                    data-i18n="sections.projects.kicker"
                >
                    Selected Work
                </p>

                <h2
                    data-i18n="sections.projects.title"
                >
                    Projects that combine web development and AI.
                </h2>

            </div>

        </div>

        <div
            class="projects-grid"
            id="projectsGrid"
        ></div>

    </div>

</section>


<section class="section section-muted" id="certificates">

    <div class="container">

        <div class="section-heading">

            <span class="section-number">04</span>

            <div>

                <p
                    class="section-kicker"
                    data-i18n="sections.certificates.kicker"
                >
                    Certificates
                </p>

                <h2
                    data-i18n="sections.certificates.title"
                >
                    Continuous learning in web and AI technologies.
                </h2>

            </div>

        </div>

        <div
            class="certificate-preview-grid"
            id="certificatePreviewGrid"
        ></div>

        <div class="section-action">

            <a
                class="outline-button"
                href="{{ route('certificates') }}"
                data-i18n="certificates.viewAll"
            >
                View All Certificates
            </a>

        </div>

    </div>

</section>


<section class="section" id="skills">

    <div class="container">

        <div class="section-heading">

            <span class="section-number">05</span>

            <div>

                <p
                    class="section-kicker"
                    data-i18n="sections.skills.kicker"
                >
                    Skills
                </p>

                <h2
                    data-i18n="sections.skills.title"
                >
                    Technologies and tools I work with.
                </h2>

            </div>

        </div>

        <div
            class="skills-grid"
            id="skillsGrid"
        ></div>

    </div>

</section>


<section class="section section-muted" id="volunteer">

    <div class="container">

        <div class="section-heading">

            <span class="section-number">06</span>

            <div>

                <p
                    class="section-kicker"
                    data-i18n="sections.volunteer.kicker"
                >
                    Volunteer Experience
                </p>

                <h2
                    data-i18n="sections.volunteer.title"
                >
                    Community participation and volunteer experience.
                </h2>

            </div>

        </div>

        <div class="volunteer-grid">

            <article class="volunteer-card">

                <span
                    class="volunteer-label"
                    data-i18n="volunteer.platform"
                >
                    National Volunteer Platform
                </span>

                <strong id="volunteerHours">
                    35+ volunteer hours
                </strong>

                <div
                    class="volunteer-certificates"
                    id="volunteerCertificates"
                ></div>

            </article>


            <article class="volunteer-card">

                <span
                    class="volunteer-label"
                    data-i18n="volunteer.universityLabel"
                >
                    University Activities
                </span>

                <ul id="volunteerActivities"></ul>

            </article>

        </div>


        <div class="languages-row">

            <div>

                <span data-i18n="languages.arabic.label">
                    Arabic
                </span>

                <strong data-i18n="languages.arabic.level">
                    Native
                </strong>

            </div>

            <div>

                <span data-i18n="languages.english.label">
                    English
                </span>

                <strong data-i18n="languages.english.level">
                    Intermediate
                </strong>

            </div>

        </div>

    </div>

</section>

@endsection