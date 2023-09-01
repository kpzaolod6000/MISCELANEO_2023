<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    //campos que se permiten editar
    protected $fillable = ['name','price', 'featured_image_url'];
}
