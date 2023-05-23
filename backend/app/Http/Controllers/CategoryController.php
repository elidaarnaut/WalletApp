<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;


class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::get();
        $subcategory = Subcategory::get();
        return response()->json([
            'subcategory'=> $subcategory,
            'category'=>$category,]);
    }

   public function store(Request $request)
    {
       Category::create($request->all());
       return 'hello';
    }
}
