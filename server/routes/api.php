<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\GroupController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\UserGroupController;
use App\Http\Controllers\ChatController;

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

// All groups API requests
Route::apiResource('group', GroupController::class) -> middleware('auth:sanctum');
Route::post('group/join/{group}', [UserGroupController::class, 'store']) -> middleware('auth:sanctum');
Route::delete('group/leave/{group}', [UserGroupController::class, 'destroy']) -> middleware('auth:sanctum');
Route::get('joined', [UserGroupController::class, 'show']) -> middleware('auth:sanctum');

// All user API requests
Route::apiResource('user', UserController::class) -> middleware('auth:sanctum');
Route::delete('user', [UserController::class, 'delete']);
Route::post('auth/register', [AuthController::class, 'createUser']);
Route::post('auth/login', [AuthController::class, 'loginUser']);

// All chat API requests
Route::post('send-message', [ChatController::class, 'sendMessage']) -> middleware('auth:sanctum');
Route::get('get-message/{group}', [ChatController::class, 'getMessages']) -> middleware('auth:sanctum');