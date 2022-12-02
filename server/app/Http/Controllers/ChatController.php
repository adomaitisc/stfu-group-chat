<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use App\Events\message as MessageEvent;
use App\Models\User;
use Laravel\Sanctum\PersonalAccessToken;

class ChatController extends Controller
{
    
    public function sendMessage(Request $request)
    {
        $message = $request->input('message');
        $token = PersonalAccessToken::findToken($request->bearerToken());
        $userId = $token -> tokenable_id;
        $name = User::where('id', $userId)->first()->name;
        event(new MessageEvent($request->input('message'), $name, $request->input('group_id')));
        $group = $request->input('group_id');
        $message = Message::create([
            'message' => $message,
            'name' => $name,
            'group_id' => $group
        ]);
        return response()->json([
            "status" => "success",
            "data" => $message
        ], 200);
    }

    public function getMessages($groupId)
    {
        $messages = Message::where('group_id', $groupId)->get();
        return response()->json([
            "status" => "success",
            "data" => $messages
        ], 200);
    }
}
