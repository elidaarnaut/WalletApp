<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use AmrShawky\LaravelCurrency\Facade\Currency;

class CurrencyConverterController extends Controller
{

 public function convert(Request $request){


    $from = $request->input('from');
    $to = $request->input('to');
    
    $req_url = 'https://api.exchangerate.host/convert?from='.$from.'&to='.$to;
    $response_json = file_get_contents($req_url);
    $response = json_decode($response_json);
    $rate = $response->info->rate;
    $converted=$request->input('amount')*$rate;
    return $converted;

 }

}
