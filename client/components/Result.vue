<script>
import Loading from '@/components/Loading';
import axios from 'axios';
import {mapActions, mapState} from 'vuex';

export default {
    data () {
        return {
            params: []
        }
    },
    props: ['items', 'loadProgress'],
    components: {
        Loading
    },
    methods: {
        ...mapActions({
            postSongs: 'postSongs'
        }),
        getYear(dateStr) {
            const date = new Date(dateStr);
            return date.getFullYear();
        },
        clickPost (postData, id, url) {
            if (confirm('登録しますか？')) {
                for (let key in postData) {
                    if (id == postData[key].trackId && url == postData[key].trackViewUrl) {
                        this.params = postData[key];
                    }
                }
                // 登録処理実行
                this.postSongs(this.params);
            }
        }
    }
}
</script>

<template>
    <div>
        <ul class="list">
            <li class="item" v-for="item of items" :key="item.trackId">
                <div class="item-inner">
                    <div class="checkbox">
                        <button @click="clickPost(items, item.trackId, item.trackViewUrl)">登録</button>
                    </div>
                    <div class="photo">
                        <img
                            class="photo-img"
                            :src="item.artworkUrl100"
                            :alt="item.trackName"
                        />
                    </div>
                    <div class="content">
                        <p>
                            <a
                                class="track"
                                :href="item.trackViewUrl"
                                target="_blank"
                                >{{ item.trackName }}</a
                            >
                        </p>
                        <p>
                            <a
                                class="artist"
                                :href="item.artistViewUrl"
                                target="_blank"
                                >{{ item.artistName }}</a
                            >
                        </p>
                        <div class="data">
                            {{ getYear(item.releaseDate) }} /
                            {{ item.primaryGenreName }} / ￥{{
                                item.trackPrice
                            }}
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <Loading class="loading" v-show="loadProgress" />
    </div>
</template>

<style scoped>
.item {
    padding: 20px 0;
}

.item:nth-of-type(even) {
    background-color: #f5f5f5;
}

.item-inner {
    display: flex;
    width: 90%;
    max-width: 600px;
    margin: auto;
}

.photo {
    flex: 0 0 150px;
}

.photo-img {
    width: 100%;
    display: block;
}

.content {
    flex: 1 1;
    padding-left: 20px;
}

.track {
    color: #42b883;
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
}

.artist {
    display: block;
    color: #42b883;
    font-size: 1.4rem;
    font-weight: 700;
    text-decoration: none;
}

.data {
    margin-top: 1.5em;
    text-align: right;
    font-size: 1.2rem;
}

.loading {
    position: fixed;
    top: 70px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: #35495e;
}
.checkbox {
    padding-right: 50px;
    text-align: center;;
}
input[type=checkbox] {
    transform: scale(1.5);
}
</style>
