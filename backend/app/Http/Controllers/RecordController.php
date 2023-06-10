<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Record;
use App\Models\Budget;
use Illuminate\Support\Facades\DB;


class RecordController extends Controller
{
    public function index()
    {
        $record = DB::table('records')
                    ->join('categories', 'records.categoryid', '=', 'categories.id')
                    ->join('subcategories', 'records.subcategoryid', '=', 'subcategories.id')
                    ->select(['records.id', 'records.typeofpayment','records.amount',  'categories.name as category_name', 'subcategories.name as subcategory_name'])->get();
    
    return $record;
    }
    
    public function store(Request $request)
    {
        $record = Record::create($request->all());
        $amount = $request->input('amount');
        $budget= Budget::where('userid', $request->input('userid'))->first();
        $typeofpayment=$request->input('typeofpayment');
        if($typeofpayment==0){
          $final= $budget->amount - $amount;  
        }
        elseif($typeofpayment==1){
            $final= $budget->amount + $amount;  
        }

        
        Budget::where('userid',$request->input('userid'))->update(['amount'=>$final]);
        return 'hello';
    }
   
}
