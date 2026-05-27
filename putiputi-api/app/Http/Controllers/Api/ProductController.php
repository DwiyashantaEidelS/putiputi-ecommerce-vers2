<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\Product;

class ProductController extends Controller
{
    // GET ALL PRODUCTS
    public function index()
    {
        return response()->json(Product::latest()->get());
    }

    // GET DETAIL PRODUCT
    public function show($id)
    {
        $product = Product::findOrFail($id);

        return response()->json($product);
    }

    // CREATE PRODUCT
    public function store(Request $request)
{
    $request->validate([
        'name' => 'required',
        'price' => 'required',
        'category' => 'required',
        'description' => 'required',
        'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048'
    ]);

    $image = $request->file('image');

    $imageName = time() . '.' . $image->extension();

    $image->move(public_path('images'), $imageName);

    $product = Product::create([
        'name' => $request->name,
        'price' => $request->price,
        'category' => $request->category,
        'description' => $request->description,
        'image' => '/images/' . $imageName,
    ]);

    return response()->json([
        'message' => 'Product created',
        'data' => $product
    ], 201);
}

    // UPDATE PRODUCT
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $product->update([
            'name' => $request->name,
            'price' => $request->price,
            'category' => $request->category,
            'description' => $request->description,
            'image' => $request->image,
        ]);

        return response()->json([
            'message' => 'Product updated',
            'data' => $product
        ]);
    }

    // DELETE PRODUCT
    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        $product->delete();

        return response()->json([
            'message' => 'Product deleted'
        ]);
    }
}