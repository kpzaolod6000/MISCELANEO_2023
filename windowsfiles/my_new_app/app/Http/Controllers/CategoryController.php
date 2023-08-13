<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\response;
use Illuminate\Http\Request;
// use Illuminate\Http\response;

class CategoryController extends Controller
{

    public function __construct()
    {
        // $this->middleware('product_token'); // set middleware to all methods of class
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // dd($request);
        // if ($request->is('categories')) {
        //     dd("categories here!!!");
        // }
        // dd($request->path());
        // dd($request->ip());
        // dd($request->method());

        $category1 = 'Alimentos';
        $category2 = 'Viajes';
        return view('category.index', compact('category1','category2'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return response(["hola",2])
        // ->header('X-cabecera','Valor de la cabecera')
        // ->header('X-cabecera2','Valor de la cabecera')
        // ->cookie("my_cookie",'value',60);

        return redirect('categories')->with('status','Creación Exitosa'); //redirecciona al index
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         // dd($request->filled(['name'])); // check if the name parameter is empty
        // dd($request->has(['name'])); // check if is the name parameter
        // dd($request->except(['name'])); // give everything except the name parameter
        // dd($request->only(['name','surname'])); // only receive these parameters
        // dd($request->name); // shortcut, searchs for wherever the attribute name is
        // dd($request->boolean('is_active'));
        // dd($request->query()); // to the parameters of request
        // dd($request->query('name'));
        // dd($request->all());
        // dd($request->input('name')); // returns the values of the request body

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
