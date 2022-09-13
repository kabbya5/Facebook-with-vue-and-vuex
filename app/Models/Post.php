<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Carbon\Carbon;

class Post extends Model
{
    use HasFactory;

    protected $appends = ['date',];
    
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getDateAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
