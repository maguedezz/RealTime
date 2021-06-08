<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->only('store'); // apply only to store method
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        $posts = Post::with('user', 'likes')
            ->take(5)
        // ->skip($request->get('skip', 0) + (($request->get('page') - 1) * 5))
            ->latest()
            ->get();

        return (PostResource::collection($posts))->additional([
            'likes' => $posts->mapWithKeys(function ($post) {
                return [$post->id => $post->likes->count()];
            }),
        ]);
    }

    /**
     * @param Request $request
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'body' => 'required',
        ]);

        $post = $request->user()->posts()->create($request->only('body')); // only data we need to store

        return new PostResource($post);
    }
}
