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
        return 'You have reached GET group/{id}';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group  $Group
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Group $Group)
    {
        return 'You have reached PUT/PATCH group/{id}';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group  $Group
     * @return \Illuminate\Http\Response
     */
    public function destroy(Group $Group)
    {
        return 'You have reached DELETE group/{id}';
    }
}
