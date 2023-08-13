<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    //campos que se permiten editar
    protected $fillable = ['serie','status', 'buyer_id'];

    public function buyer(){
        return $this->belongsTo(Buyer::class);
    }

     
}
