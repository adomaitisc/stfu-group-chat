<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return json_encode(['name' => 'John Doe', 'email' => 'JoeMama@gmail.com']);
    }
}
