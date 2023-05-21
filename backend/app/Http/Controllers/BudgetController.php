<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Budget;


class BudgetController extends Controller
{
//    public function __construct()
//     {
//         $this->middleware('auth');
//     }
 public function index()
    {
        $budget = Budget::get();
        return $budget;
    }
    

    public function store(Request $request)
    {
       Budget::create($request->all());
       return 'hello';
    }
}
