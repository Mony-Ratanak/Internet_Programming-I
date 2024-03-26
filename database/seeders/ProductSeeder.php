<?php

namespace Database\Seeders;

use Faker\Factory;
use App\Models\Product;
use App\Models\categories;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run():void
    {

        DB::table('categories')->insert(
            [
                [
                    'img'=>"humbeger.png",
                    'name'=>"Hamburger",

                    'color'=>"#f2c8a5",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"persimmon.png",
                    'name'=>"Peach",

                    'color'=>"#d1cd95",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"kiwi.png",
                    'name'=>"Oganic Kiwi",

                    'color'=>"#a3d195",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"apple.png",
                    'name'=>"Apple",

                    'color'=>"#d195a6",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"snack.png",
                    'name'=>"Snack",

                    'color'=>"#eafa96",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"blueberry.png",
                    'name'=>"Black plum",

                    'color'=>"#a895d1",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"cabbage.png",
                    'name'=>"Vegetables",

                    'color'=>"#b0d195",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"headphone.png",
                    'name'=>"Headphone",

                    'color'=>"#95d1c5",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"Biscuits.png",
                    'name'=>"Cake-Milk",

                    'color'=>"#c9d195",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"orange.png",
                    'name'=>"Orange",

                    'color'=>"#ffd175",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ]
            ]
        );

        DB::table('promotions')->insert(
            [
                [
                    "image"  => "oinoin.png",
                    "title"     => "Everyday Fresh and Clean with Our Products",
                    "bg_color"  => "#C3A555",
                    "btn_color" => '#3BB77E',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    "image"  => "juice.png",
                    "title"     => "Make your Breakfast Healthy and Easy",
                    "bg_color"  => "#E0AEA8",
                    "btn_color" => '#3BB77E',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    "image"  => "vegetables.png",
                    "title"     => "The best Organic Products Online",
                    "bg_color"  => "#AADC9D",
                    "btn_color" => '#FDC040',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ]
            ]
        );


        DB::table('products')->insert(
            [
                [
                    "specail_offer"=> "-17%",
                    "tag_color"    => "#3BB77E",
                    "image"=>'mengo.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Seeds of Change Organic Quinoa, Brown and Red Rice",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    "specail_offer"=> "Hot",
                    "tag_color"    => "#FD6E6E",
                    "image"=>'corn.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "All Natural Italian-Style Chicken Meatballs",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> "Sale",
                    "tag_color"    => "#FDC040",
                    "image"=>'oranges.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Angie’s Boomchickapop Sweet - Salty Kettle Corn",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,10),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> "Sale",
                    "tag_color"    => "#FDC040",
                    "image"=>'chilis.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Foster Farms Takeout Crispy Classic Buffalo",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> "-25%",
                    "tag_color"    => "#3BB77E",
                    "image"=>'lemons.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Blue Diamond Almonds Lightly Salted Vegetables",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> "-18%",
                    "tag_color"    => "#3BB77E",
                    "image"=>'fish.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Chobani Complete Vanilla Greek Yogurt",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> "Sale",
                    "tag_color"    => "#FDC040",
                    "image"=>'fish_lemon.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> "Sale",
                    "tag_color"    => "#FDC040",
                    "image"=>'steak.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Encore Seafoods Stuffed Alaskan Salmon",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> "Hot",
                    "tag_color"    => "#FD6E6E",
                    "image"=>'fish_fille.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Gorton’s Beer Battered Fish Fillets with soft paper",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [

                    "specail_offer"=> "Hot",
                    "tag_color"    => "#FD6E6E",
                    "image"=> 'vegetable.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ]


            ]
        );


    }
}
