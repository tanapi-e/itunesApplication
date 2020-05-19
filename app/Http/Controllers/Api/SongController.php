<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Song;

class SongController extends Controller
{
    /**
     * 初期表示
     *
     * @param Request $request
     * @param Song $post
     * @return Response
     */
    public function index(Request $request, Song $post)
    {
        $posts = $post->getAllPosts($orderBy = ['id', 'DESC']);
        $data = [
            'posts' => $posts
        ];

        return response()->json($data, 200);
    }

    /**
     * songsテーブルへ保存
     *
     * @param  Request  $request
     * @param Song $post
     * @return Response
     */
    public function store(Request $request, Song $post)
    {
        $req = [
            'song_name' => $request["trackName"],
            'artist_name' => $request["artistName"],
            'song_url' => $request["previewUrl"],
            'artist_url'=> $request["artistViewUrl"],
            'genre' => $request["primaryGenreName"],
            'price' => $request["trackPrice"],
            'song_image_url' => $request["artworkUrl100"]
        ];
        $newPost = $post->createPost($req);

        $data = [
            'post' => $newPost,
        ];

        return response()->json($data, 200);
    }

    /**
     * 楽曲データの削除
     *
     * @param  Request $request
     */
    public function destroy(Request $request)
    {
        $delData = Song::find($request['id']);
        $delData->delete();
    }
}
