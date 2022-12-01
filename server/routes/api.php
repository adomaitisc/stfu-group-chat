<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\GroupController;
use App\Http\Controllers\Api\UserController;

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
// Route::put('group/{group}/member-added', [GroupController::class, 'updateMemberAdded']);
// Route::put('group/{group}/member-removed', [GroupController::class, 'updateMemberRemoved']);

// All user API requests
Route::apiResource('user', UserController::class) -> middleware('auth:sanctum');
Route::post('auth/register', [AuthController::class, 'createUser']);
Route::post('auth/login', [AuthController::class, 'loginUser']);
// Route::get('user', [UserController::class, 'show']);
