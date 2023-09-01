<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use App\Models\Product;
use Faker\Core\Color;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return view('products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $product = New Product();
        return view('products.create', compact('product'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {
        $data = $request->all();
        if ($request->has('image')) {
            $image_path = $request->file('image')->store('medias'); // la imagen se extrae del almacen en storage/medias/.png
            $data['featured_image_url'] = $image_path;
        }

        Product::create($data);
        return redirect()->route('products.index')->with(['status'=> 'Success','color'=>'green','message'=>'Product created successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return view('products.create',compact('product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        
        $data = $request->all();
        if ($request->has('image')) {
            Storage::delete($product->featured_image_url);
            $image_path = $request->file('image')->store('medias'); // la imagen se extrae del almacen en storage/medias/.png
            $data['featured_image_url'] = $image_path;
        }

        $product->fill($data); //new data
        $product->save();

        return redirect()->route('products.index')->with(['status'=> 'Success','color'=>'green','message'=>'Product updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        try {
            $product->delete();
            $result = ['status'=> 'Success','color'=>'green','message'=>'Product deleted successfully'];
        } catch (\Throwable $th) {
            $result = ['status'=> 'Failed','color'=>'red','message'=>'Product cannot be deleted'];
        }
        

        return redirect()->route('products.index')->with($result);

    }
}
