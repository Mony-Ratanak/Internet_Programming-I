@props(['title'])
<div class="category">
    <div class="title">
        <h2 style="font-weight: 200;">{{ $title }}</h2>
        {{-- <h2 style="font-weight: 300;">Featured Categories</h2> --}}
    </div>
    <div class="all_menu">
        <ul style="margin-top: 20px; display:flex; align-items:center;font-size:20px ">

            <li style="font-weight: 700;"><a href="#">All </a></li>
            <li ><a href="#">Milks & Diaries</a></li>
            <li ><a href="#">Coffee & Tea</a></li>
            <li ><a href="#">Pet Foods</a></li>
            <li ><a href="#">Meats</a></li>
            <li ><a href="#">Vegetables</a></li>
            <li ><a href="#">Fruits</a></li>
        </ul>
    </div>
</div>


