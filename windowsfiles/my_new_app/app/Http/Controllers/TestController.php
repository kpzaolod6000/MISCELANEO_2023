<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    function prints()
    {
        return "hi from controller!!!";
    }

    function parameter($id)
    {
        return "parametros ". $id;
    }

    function blog($id ,$slug = null)
    {
        return "parametros ". $id . " " . $slug;
    }

    function printsProducts()
    {
        return "listado de productos";
    }

    function sinToken()
    {
        return "no tienes acceso";
    }

}
