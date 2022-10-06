<?php

use App\Http\Controllers\FacebookController;
use App\Http\Controllers\FriendRequestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts',[FacebookController::class,'posts']);
Route::get('/profile/{id}',[FacebookController::class,'userProfile'])->name('user.profile');

// Route::controller(FriendRequestController::class)->group(function (){
//     Route::post('/api/send-friend-request/{id}','sendFriendRequest');
//     Route::post('/api/accept-fiend-request/{id}', 'acceptFriendRequest');
// });

Route::post('/send-friend-request',[FriendRequestController::class,'sendFriendRequest'])->name('send.friend');