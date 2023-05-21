<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // public function __construct()
    //     {
    //         $this->middleware('auth');
    //     }


    public function store(Request $request)
    {   $request['password'] = Hash::make($request['password']);
        User::create($request->all());
        return 'hello';
    }
}
