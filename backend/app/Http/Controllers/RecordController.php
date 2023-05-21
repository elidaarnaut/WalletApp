<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Record;
use App\Models\Budget;


class RecordController extends Controller
{
    public function index()
    {
        $record = Record::get();
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
