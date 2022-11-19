<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\GroupController;

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
Route::apiResource('group', GroupController::class);
Route::put('group/{group}/member-added', [GroupController::class, 'updateMemberAdded']);
Route::put('group/{group}/member-removed', [GroupController::class, 'updateMemberRemoved']);
Route::get('group/{user}', [GroupController::class, 'allGroupsOfUser']);

// All user API requests
Route::post('auth/register', [AuthController::class, 'createUser']);
Route::post('auth/login', [AuthController::class, 'loginUser']);
