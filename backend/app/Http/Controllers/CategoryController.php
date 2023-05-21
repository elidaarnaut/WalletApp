<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;


class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::get();
        return $category;
    }

   public function store(Request $request)
    {
       Category::create($request->all());
       return 'hello';
    }
}
