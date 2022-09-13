<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Post::class;

    public function definition()
    {    
        return [
            'user_id' => User::all()->random()->id,
            'body' => $this->faker->paragraphs(rand(5, 8), true),
            'image' => 'https://source.unsplash.com/random',
            
        ];
    }
}
