<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\FormSendRequest;
use App\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /**
     * ログイン情報取得
     * @param  User $post
     * @param  string  $email
     * @param  string $password
     * @return Response
     */
    //public function show(User $post, string $email, string $password)
    public function show(User $post, FormSendRequest $request)
    {
        // メールアドレスとパスワードを取得
        $email = $request->input('email');
        $password = $request->input('password');

        // usersテーブルからデータ取得
        $user = $post->getLoginUser($email);

        // Userテーブルからデータ取得できなかった時
        if (empty($user)) {
            // エラーメッセージをセット
            $data = [
                'msg' => 'メールアドレスかパスワードが間違っています。'
            ];
        } else {
            // 入力されたパスワードとDBから取得したパスワードが一致する時
            if (Hash::check($password, $user['password'])) {
                // ユーザーIDを設定
                $data = [
                    'user_id' => $user["user_id"]
                ];
            } else {
                $data = [
                    'msg' => 'パスワードが間違っています。'
                ];
            }
        }

        return response()->json($data, 200);
    }
}
