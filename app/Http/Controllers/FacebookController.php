<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class FacebookController extends Controller
{
    public function posts(){
        $posts = Post::with('user')->get();
        return response()->json($posts);
    }

    public function userProfile($id){
        $user = User::find($id);
        $posts = Post::with('user')->where('user_id',$id)->get();
        return response()->json([$user,$posts]);
    }
}
