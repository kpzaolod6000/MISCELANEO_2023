<div>
    {{-- <div class="card" style="{{$width}}"> --}}
    <div {{$attributes->merge(["class" => "card"])}} style="{{$width}}">
        <img src="{{$img}}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{$title}}</h5>
          <p class="card-text">{{$slot}}</p>
          {{ $showButton() }}
          {{-- <a href="#" class="btn btn-primary">Go somewhere</a> --}}
        </div>
      </div>
</div>