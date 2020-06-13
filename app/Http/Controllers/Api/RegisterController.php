<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\FormSendRequest;
use App\User;

class RegisterController extends Controller
{
    public function register(FormSendRequest $request, User $post)
    {
        // パスワードハッシュ化
    }
}
