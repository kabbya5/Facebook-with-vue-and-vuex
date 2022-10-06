<?php

namespace App\Http\Controllers;

use App\Exceptions\FriendRequestNotFoundException;
use App\Exceptions\UserNotFoundException;
use App\Models\Friend;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class FriendRequestController extends Controller
{

    public function sendFriendRequest(Request $request){

        // return response()->json([$request->all()]); 
        $data = $request->validate([
            'friend_id' => 'required',
        ]);

        $friend_id = $request->input('friend_id');

        try{
            User::findOrFail($friend_id);
            
            if(Auth::check()){
                $user_id = Auth::id();
            }else{
                $user_id = 11;
            }

            Friend::create([
                'user_id' => $user_id,
                'friend_id' => $friend_id,
            ]);
            

            // ->friends()->create(['friend_id' => $friend_id]);
        } catch (ModelNotFoundException $e){
            throw new UserNotFoundException();
        }   
    }
    public function acceptFriendRequest(){
        $data = request()->validate([
            'user_id' => '' ,
            'status' => '',
        ]);

        try{
            $friendRequest = Friend::where('user_id', $data['user_id'])
            ->where('friend_id',auth()->user()->id)
            ->firstOrFail();
        } catch(ModelNotFoundException $e){
            throw new FriendRequestNotFoundException();
        }

        
        $friendRequest->update(array_merge($data,[
            'confirmed_at' => now()
        ])); 
    }
}
 