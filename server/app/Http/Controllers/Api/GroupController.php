<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGroupRequest;
use App\Models\Group;
use App\Models\User;
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
        return Group::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGroupRequest $request)
    {
        // creating a group where the creator is the user who is logged in
        $group = Group::create($request -> all());
        $group->creator = $request->user()->name;
        $group->save();

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

        $user = $request->user();
        $user->groups()->attach($Group->id);
        

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
    public function destroy(Group $Group, Request $request)
    {
        // if this user is the creator of the group then delete the group


        if ($Group->creator == $request->user()->name) {
            $Group->delete();
            return response()->json([
                "status" => "success",
                "data" => "Group deleted"
            ], 200);
        }
        else {
            return response()->json([
                "status" => "error",
                "data" => "You are not the creator of this group"
            ], 400);
        }
    }
}
