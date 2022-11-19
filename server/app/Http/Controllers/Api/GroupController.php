<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGroupRequest;
use App\Models\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            "status" => "success",
            "data" => []
        ]);
    }

    public function allGroupsOfUser(Request $request)
    {
        $user = $request->user();
        $groups = $user->groups()->get();
        return response()->json([
            "status" => "success",
            "data" => $groups
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGroupRequest $request)
    {
        $group = Group::create($request->all());
        return response()->json([
            "status" => "success",
            "data" => $group
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Group  $Group
     * @return \Illuminate\Http\Response
     */
    public function show(Group $Group)
    {
        return json_encode($Group);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group  $Group
     * @return \Illuminate\Http\Response
     */
    public function updateMemberAdded(Request $request, Group $Group)
    {
        //Add one to the member count
        $Group->member_count = $Group->member_count + 1;
        $Group->save();
        return response()->json([
            "status" => "success",
            "data" => $Group
        ], 200);
    }

    public function updateMemberRemoved(Request $request, Group $Group)
    {
        //Remove one from the member count
        if ($Group->member_count > 0) {
            $Group->member_count = $Group->member_count - 1;
            $Group->save();
            return response()->json([
                "status" => "success",
                "data" => $Group
            ], 200);
        }
        else {
            return response()->json([
                "status" => "error",
                "data" => "Member count is already 0"
            ], 400);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group  $Group
     * @return \Illuminate\Http\Response
     */
    public function destroy(Group $Group)
    {
        // Deleting the group
        $Group->delete();
        return response()->json([
            "status" => "success",
            "message" => "Group deleted successfully"
        ], 200);
    }
}
