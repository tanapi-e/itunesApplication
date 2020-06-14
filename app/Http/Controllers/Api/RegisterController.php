<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\FormSendRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;

class RegisterController extends Controller
{
    public function register(FormSendRequest $request, User $post)
    {
        $user_id = Str::random(10);
        $req = [
            'name' => $request['email'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'user_id' => $user_id
        ];

        // データ登録
        $newPost = $post->createPost($req);

        $data = [
            'post' => $newPost,
        ];

        return response()->json($data, 200);
    }
}
