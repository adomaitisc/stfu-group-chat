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
    public function show($id)
    {
        $group = Group::where('id', $id)->get();
        return response()->json([
            "status" => "success",
            "data" => $group
        ], 200);
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
