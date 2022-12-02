<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class StoreGroupRequest extends FormRequest
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
            "group_name" => "required|max:16",
            "tag1" => "max:16",
            "tag2" => "max:16",
            "tag3" => "max:16",
            "tag4" => "max:16",
            "image" => "required",
        ];
    }
}
