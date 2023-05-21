<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PlannedPayment;
class PlannedPaymentController extends Controller
{
     public function index()
    {
        $plannedpayment = PlannedPayment::get();
        return $plannedpayment;
    }
    public function store(Request $request)
    {
       PlannedPayment::create($request->all());
       return 'hello';
    }
}
