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
                    'img'=>"a.Hamburger.png",
                    'name'=>"Hamburger",

                    'color'=>"#f2c8a5",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"b.Peace.png",
                    'name'=>"Peach",

                    'color'=>"#d1cd95",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"c.Kiwi.png",
                    'name'=>"Oganic Kiwi",

                    'color'=>"#a3d195",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"d.apple.png",
                    'name'=>"Apple",

                    'color'=>"#d195a6",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"e.snack.png",
                    'name'=>"Snack",

                    'color'=>"#eafa96",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"f.plam.png",
                    'name'=>"Black plum",

                    'color'=>"#a895d1",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"g.vegetable.png",
                    'name'=>"Vegetables",

                    'color'=>"#b0d195",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"h.headphone.png",
                    'name'=>"Headphone",

                    'color'=>"#95d1c5",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"i.cake.png",
                    'name'=>"Cake-Milk",

                    'color'=>"#c9d195",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"j.orange.png",
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
                    "image"  => "Onion.png",
                    "title"     => "Everyday Fresh and Clean with Our Products",
                    "bg_color"  => "#C3A555",
                    "btn_color" => '#3BB77E',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    "image"  => "Juice.png",
                    "title"     => "Make your Breakfast Healthy and Easy",
                    "bg_color"  => "#E0AEA8",
                    "btn_color" => '#3BB77E',
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    "image"  => "Mix_organic.png",
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
                    "image"=>'1-Seeds.png',
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
                    "image"=>'2-Corn.png',
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
                    "image"=>'3-Orange.png',
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
                    "image"=>'4-Tomate.png',
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
                    "image"=>'5-BlueDiamond.png',
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
                    "image"=>'6-Chobani.png',
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
                    "image"=>'7-Canado.png',
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
                    "image"=>'8-Encore.png',
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
                    "image"=>'9-Gorton.png',
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
                    "image"=> '10-Haagen.png',
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
