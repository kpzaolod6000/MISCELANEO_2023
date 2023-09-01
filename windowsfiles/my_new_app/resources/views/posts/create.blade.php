<form action="{{ route('post.store') }}" method="post">
    <!-- @csrf prevents request hijacking attack, prevents XSS attack  -->
    @csrf 

    @if ($errors->any())
        <ul>
            @foreach ($errors->all() as $err)
                <li>{{ $err }}</li>    
            @endforeach
        </ul>
    @endif

    <input type="text" name="name" value = {{ old('name') }}>
    <input type="text" name="description" value = {{ old('description') }}>
    <input type="text" name="author" value = {{ old('author') }}>

    <button type="submit">Enviar</button>
</form>