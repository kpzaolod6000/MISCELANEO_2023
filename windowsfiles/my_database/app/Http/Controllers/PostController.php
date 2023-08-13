<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function index()
    {
        // foreach(Post::all() as $post):
        //     echo "<pre>";
        //     print_r($post);
        //     print_r($post->title);
        //     echo "</pre>";
        // endforeach;
        
        $id = 2;
        $post3 =  Post::find($id);
        // echo $post3;

        $posts = Post::where('is_active',1)
                       ->where('title','=','salvajes')
                       ->get();
        $posts1 = Post::where('is_active',1)
                       ->first();
        // echo '<br>';
        // echo "post de 1: " . $posts1;
                       
        // foreach($posts as $post):
        //     echo "<pre>";
        //     print_r($post->title);
        //     echo "</pre>";
        // endforeach;

        // search for the named title but create a new one if not already named
        // $postFirstCreate = Post::firstOrCreate([
        //     'title' => 'mascotas firstOrCreate'
        // ]);

        // echo "postFirstCreate" . $postFirstCreate;

        // Post::create([
        //     'title' => 'T acuaticos',
        //     'description' => 'T acuaticos',
        //     'is_active' => false
        // ]);

        // $postUpdate = Post::find(2);
        // $postUpdate->description = "mascotas de perros ";
        // $postUpdate->save();

        // $postUpdate = Post::find(3);
        // $postUpdate->delete();

        /**  ONE to MANY*/
        //  show the comments of id 1
        // $comments = Post::find(1)->comments;

        // $posts = Post::with('comments')->where('is_active', 1)->get();

        // foreach($posts as $post):
        //     echo "<pre>";
        //     echo "POST: " .$post->title . "<br> \t " . $post->comments;
        //     echo "</pre>";
        // endforeach;

        /**  MANY to MANY*/
       $posts_t = Post::find(1);
       foreach($posts_t->tags as $tag):
            echo "<pre>";
            echo $tag;
            echo "</pre>";
        endforeach;

    }

    public function queryBuilder(){
        $categories = DB::table('categories')->get();
        
        foreach ($categories as $category) {
          // $categories = DB::table('categories')->first();
          echo "<pre>";
          print_r($category);
          echo "</pre>";
        }

        $posts = DB::table('posts')
            ->join('comments', 'posts.id', '=', 'comments.post_id')
            ->select('posts.id as idPosts','comments.id as idComment','comments.description as descriptComment')
            ->get();

        echo $posts;
        // foreach ($posts as $post) {
        //   echo "<pre>";
        //   print_r($post);
        //   echo "</pre>";
        // }
    }

    public function queryBuilder2(){
      $posts = Post::with('comments')->get();
      return view('conditionals',compact('posts'));
    }
}
