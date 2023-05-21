<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;


class Record extends Model
{
     use  HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
      
        'categoryid',
        'subcategoryid',
        'typeofpayment',
        'amount',
        'userid',
        
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
     
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
     
    ];
     public function user(): BelongsTo{

        return $this->BelongsTo(User::class);
    }
     public function category(): hasOne{

        return $this->hasOne(Category::class);
    }
     public function subcategory(): hasOne{

        return $this->hasOne(Subcategory::class);
    }


}
