<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('products')->insert([

            [
                'name' => 'Rose Bloom Bouquet',
                'price' => 250000,
                'image' => 'img-1.jpg',
                'category' => 'Bouquet',
                'description' => 'Elegant artificial rose bouquet perfect for gifts and decoration.',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'Tulip Basket',
                'price' => 180000,
                'image' => 'img-2.jpg',
                'category' => 'Decoration',
                'description' => 'Beautiful handcrafted tulip arrangement for modern interiors.',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'White Lily Vase',
                'price' => 320000,
                'image' => 'img-3.jpg',
                'category' => 'Vase Flower',
                'description' => 'Minimalist white lily decoration with premium vase design.',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}