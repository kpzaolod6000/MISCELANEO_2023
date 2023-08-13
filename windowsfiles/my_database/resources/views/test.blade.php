{{$name}}

@php

    $name_ = "paul";
    echo $name_;
    
@endphp

@if ($name == "Kelvin")
    <h1>hola {{$name}} !!!</h1>
@endif