<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormSendRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required'
        ];
    }

    public function messages() {
        return [
            'email' => '正しいメールアドレスを入力して下さい。',
            'password' => '正しいパスワードを入力して下さい。'
        ];
    }
}
