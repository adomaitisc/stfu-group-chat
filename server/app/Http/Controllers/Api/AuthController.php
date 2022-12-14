<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    //
    public function createUser(Request $request)
    {
        try {
            // see if the email ends with @wit.edu
            $email = $request->input('email');

            if (preg_match('/@wit.edu$/', $email) === 0) {
                return response()->json([
                    'success' => false,
                    'message' => 'This email is not a WIT email'
                ], 400);
            }

            $validateUser = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required'
            ]);

            if ($validateUser->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            } 
                $user = User::create([
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                    'password' => Hash::make($request->input('password'))
                ]);

                $token = $user->createToken('remember_token')->plainTextToken;

                return response()->json([
                    'success' => true,
                    'message' => 'User created successfully',
                    'user' => $user,
                    'token' => $token
                ], 201);
        
        }
        catch (\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function loginUser(Request $request) 
    {
        try {
            $validateUser = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if ($validateUser->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if(!auth()->attempt($request->only('email', 'password'))) {
                return response()->json([
                    'status' => false,
                    'message' => 'Invalid login details'
                ], 401);
            }

            $user = User::where('email', $request->email)->first();

            return response()->json([
                'status' => true,
                'message' => 'User Logged In Successfully',
                'token' => $user->createToken("remember_token")->plainTextToken
            ], 200);

        }
        catch (\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
