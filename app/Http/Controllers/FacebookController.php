<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;

class FacebookController extends Controller
{
    public function posts(){
        $posts = Post::with('user')->get();
        return response()->json($posts);
    }

    public function userProfile($id){

        if(Auth::check()){
            $userId = Auth::id();
        }else{
            $userId = 11;
        }
        $user = User::with('friends')->where('id',$id)->first();
        $posts = Post::with('user')->where('user_id',$id)->get();
        $friendShip = Friend::where('user_id', $userId)->where('friend_id', $id)->first();

        return response()->json([
            $user, $posts, $friendShip, 
        ]);
    }

    public function form (){
        return view('form');
    }
}
