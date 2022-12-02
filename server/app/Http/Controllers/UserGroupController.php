<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\UserGroup;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class UserGroupController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $groupId)
    {
        try {
            $token = PersonalAccessToken::findToken($request->bearerToken());
            $user = $token -> tokenable_id;
            UserGroup::create([
                'group_id' => intval($groupId),
                'user_id' => intval($user)
            ]);
            $member_count = Group::where('id', $groupId)->first()->member_count;
            Group::where('id', $groupId)->update(['member_count' => $member_count + 1]);
            return response()->json([
                "status" => "success",
                "data" => $member_count + 1
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => "error",
                "data" => $th
            ], 500);
        } 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserGroup  $userGroup
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $token = PersonalAccessToken::findToken($request->bearerToken());
        $userId = $token -> tokenable_id;
        $userGroups = UserGroup::where('user_id', $userId)->get();
        return response()->json([
            "status" => "success",
            "data" => $userGroups
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserGroup  $userGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $groupId)
    {
        $token = PersonalAccessToken::findToken($request->bearerToken());
        $userId = $token -> tokenable_id;
        $member_count = Group::where('id', $groupId)->first()->member_count;
        Group::where('id', $groupId)->update(['member_count' => $member_count - 1]);

        UserGroup::where('group_id', $groupId)->where('user_id', $userId)->delete();
        return response()->json([
            "status" => "success",
            "data" => $member_count - 1
        ], 200);
    }
}
