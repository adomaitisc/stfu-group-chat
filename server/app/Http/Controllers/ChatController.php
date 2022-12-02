<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use App\Events\message as MessageEvent;
use Laravel\Sanctum\PersonalAccessToken;

class ChatController extends Controller
{
    
    public function sendMessage(Request $request)
    {
        $message = $request->input('message');
        $token = PersonalAccessToken::findToken($request->bearerToken());
        $userId = $token -> tokenable_id;
        event(new MessageEvent($request->input('message'), $userId, $request->input('group_id')));
        $group = $request->input('group_id');
        $message = Message::create([
            'message' => $message,
            'user_id' => $userId,
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
