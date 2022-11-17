<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'group_name',
        'tag1',
        'tag2',
        'tag3',
        'tag4',
        'creator',
        'member_count'
        
    ];


}
