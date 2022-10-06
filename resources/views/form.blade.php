
@extends('layouts.app')

@section('content')

hello everyone 

<form class="my-4 flex" action="{{ route('send.friend',1) }}" method="post">
    @csrf
    <label for="frined_id"> Frinde Id </label>
    <input type="text" name="friend_id">
    <button type="submit"> save </button>
</form> 
@endsection
