<?php

namespace App\Http\Controllers;

class PostLikeController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']); // apply only to store method
    }

    /**
     * @param Request $request
     */
    public function store(Request $request)
    {

    }
}
