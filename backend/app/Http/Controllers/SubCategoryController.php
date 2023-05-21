<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategory;

class SubCategoryController extends Controller
{
     public function index()
    {
        $subcategory = Subcategory::get();
        return $subcategory;
    }
    public function store(Request $request)
    {
       Subcategory::create($request->all());
       return 'hello';
    }
}
