<?php

namespace App\Exceptions;

use Exception;

class FriendRequestNotFoundException extends Exception
{
    /**
     * Render the exception as an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {
        return response()->json([
            'error' => [
                'code' => 404,
                'title' => 'User Not Found',
                'detail' => 'Unable to Locate the User with The giver Information',
            ]
        ],404);
    }
}
