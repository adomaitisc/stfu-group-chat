<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Sanctum\PersonalAccessToken;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $token = PersonalAccessToken::findToken($request->bearerToken());
        $user = $token -> tokenable_id;
        return response()->json([
            "status" => "success",
            "data" => User::where('id', $user)->get()
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        try {
            $token = PersonalAccessToken::findToken($request->bearerToken());
            $user = $token -> tokenable_id;
            User::where('id', $user)->delete();
            return response()->json([
                "status" => "success",
                "data" => "User deleted"
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => "error",
                "data" => "User not deleted"
            ], 500);
        }
    }

}
