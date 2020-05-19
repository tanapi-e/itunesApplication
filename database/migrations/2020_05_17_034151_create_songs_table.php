<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('主キー');
            $table->string('song_name', 255)->comment('曲名');
            $table->string('artist_name', 255)->comment('アーティスト名');
            $table->string('song_url', 255)->comment('楽曲URL');
            $table->string('artist_url', 255)->comment('アーティストURL');
            $table->string('genre', 255)->comment('ジャンル');
            $table->integer('price')->comment('値段');
            $table->timestamp('release_date')->comment('発売日');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('songs');
    }
}
