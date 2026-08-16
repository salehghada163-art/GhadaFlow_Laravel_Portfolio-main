<?php

namespace App\Http\Controllers;

class PageController extends Controller
{
    /**
     * Home page — single-page layout with Home, About, Experience,
     * Projects, Certificates preview, Skills and Volunteer sections.
     */
    public function home()
    {
        return view('home');
    }
}
