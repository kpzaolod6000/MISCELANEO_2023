@extends('layouts.app')

@section('main-container')
    
<div class = "main">
    <h1>Container</h1>
    
    <form method="POST" action="/users">
      @csrf
      @method('PUT')
    </form>
    
    <p>@format_number(2000)</p>
    
</div>
@endsection

@push('javascript')
    <script>
        const a = () => {
            return "hello world";
        }
        console.log(a());
    </script>
@endpush