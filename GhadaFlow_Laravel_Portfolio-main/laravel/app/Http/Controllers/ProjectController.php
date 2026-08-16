<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Project detail page. The project id maps to the "id" field of the
     * entries defined in resources data (public/js/data.js), which remains
     * the single source of truth for project content and is rendered
     * client-side to preserve the portfolio's existing design and behavior.
     */
    public function show(string $id)
    {
        return view('projects.show', ['id' => $id]);
    }
}
