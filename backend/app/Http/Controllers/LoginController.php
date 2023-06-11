<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json(['message' => 'Login successful', 'user' => $user]);
        }

        throw ValidationException::withMessages([
            'email' => ['Invalid credentials'],
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json(['message' => 'Logout successful']);
    }
}
