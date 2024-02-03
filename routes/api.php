<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/getproductbycategory', [ProductController::class, 'getproductbycategory']);
Route::get('/getproductbyid', [ProductController::class, 'getproductbyid']);
Route::get('/getallproducts', [ProductController::class, 'getallproducts']);

Route::delete('/products/{product_id}', [ProductController::class, 'deleteProduct']);

Route::patch('/products/{product_id}', [ProductController::class, 'updateProduct']);

Route::post('/createProduct', [ProductController::class, 'createProduct']);
Route::post('/register', [AuthController::class, 'register']);

// Login
Route::post('/login', [AuthController::class, 'login']);

// Verify OTP
Route::post('/verify_otp', [AuthController::class, 'verifyOTP']);


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::get('/categories', function (Request $request) {
//     return "get all categories";
// });
// Route::post('/categories', function (Request $request) {
//     return "Create 1 category";
// });
// Route::get('/categories/{categoryId}', function (Request $request) {
//     return "Get 1 category by categoryId";
// });
// Route::patch('/categories/{categoryId}', function (Request $request) {
//     return "Update 1 category ";
// });
// Route::delete('/categories/{categoryId}', function (Request $request) {
//     return "Delete 1 category ";
// });
// Route::get('/products', function (Request $request) {
//     return "get all products";
// });
// Route::post('/products', function (Request $request) {
//     return "Create 1 products";
// });
// Route::get('/products/{productsId}', function (Request $request) {
//     return "Get 1 products by productsId";
// });
// Route::patch('/categories/{productsId}', function (Request $request) {
//     return "Update 1 products ";
// });
// Route::delete('/categories/{productsId}', function (Request $request) {
//     return "Delete 1 products ";
// });
