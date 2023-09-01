
<ul>
@foreach ($posts as $post)
    <li>{{ $post->title }}</li>
    <ul>
        @foreach ($post->comments as $comment)
            <li>
                {{$comment->description}}
            </li>
        @endforeach
    </ul>
@endforeach
</ul>