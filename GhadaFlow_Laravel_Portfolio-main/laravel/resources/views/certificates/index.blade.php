@extends('layouts.app')

@section('title', 'Certificates | GhadaFlow')
@section('nav_certificates', 'active')

@section('content')
<div class="certificates-page">
<div class="container">
<a class="back-link" href="{{ route('home') }}"><span>&larr;</span><span data-i18n="project.backToProjects">Back to Projects</span></a>
<div class="certificates-header">
<p class="section-kicker" data-i18n="sections.certificates.kicker">Certificates</p>
<h1 data-i18n="sections.certificates.title">Continuous learning in web and AI technologies.</h1>
<p data-i18n="about.description">I'm a Web Developer interested in building modern web products and exploring how AI can be integrated into useful digital experiences.</p>
</div>
<div id="certificatesPageContent"></div>
</div>
</div>
@endsection
