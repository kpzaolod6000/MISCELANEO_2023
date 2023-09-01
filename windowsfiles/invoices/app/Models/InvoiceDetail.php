<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends Model
{
    use HasFactory;

    //campos que se permiten editar
    protected $fillable = ['price','quantity', 'total_price','product_id','invoice_id'];
    
    public function product()
    {
        return $this->belongsTo(Product::class);
    }


    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

}
