<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Post::create([
        //     // 'title' => 'this is a post from seeder',
        //     // 'description' => 'this is a title description'
        //     'title' => Str::random(10),
        //     'description' => Str::random(30)
        // ]);

        //create fctory
        Post::factory()->count(5)->create();
    }
}
