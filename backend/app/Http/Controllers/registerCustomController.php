<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class registerCustomController extends Controller
{
    protected function store(Request $request)
    {
        return User::create($request ->all());
    }
}
