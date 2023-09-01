<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>New Card</title>
    <style>
      .bg-red{
        background: red
      }
    </style>
</head>
<body>
    @php
        $img = "https://picsum.photos/800/200";
    @endphp
    {{-- <x-card :img="$img" width="50%"/> --}}
    <x-card :img="$img" width="50%" class="bg-red">
      <x-slot name="title">
        titulo nuevo
      </x-slot>
      Description de la data pura;
    </x-card>

    <x-cardimagen :img="$img"/>
</body>
</html>