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
   
public function removeBudget(Request $request) {
   $userId = $request->input('userid');
    $deleted = Budget::where('userid', $userId)->delete();
  
 if ($deleted) {
            return response()->json(['message' => 'Budget removed successfully.']);
        } else {
            return response()->json(['message' => 'Failed to remove budget.']);
        }

}
}