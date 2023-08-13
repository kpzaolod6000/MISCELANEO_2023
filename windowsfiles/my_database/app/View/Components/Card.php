<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Card extends Component
{
    public $img;
    public $width;
    /**
     * Create a new component instance.
     */
    public function __construct($img = "",$width = "")
    {
        $this->img = $img;
        $this->width = $width;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.card');
    }

    /** agregando funcion extra */
    public function showButton(): View|Closure|string
    {
        return view('components.button');
    }
}
