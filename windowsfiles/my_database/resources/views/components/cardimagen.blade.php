@props(['img','width' => "10%"])
<div>
    <div {{$attributes->merge(["class" => "card"])}} style="{{$width}}">
        <img src="{{$img}}" class="card-img-top" alt="...">
      </div>
</div>