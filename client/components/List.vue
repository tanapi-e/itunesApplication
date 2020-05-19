<script>
import Loading from '@/components/Loading'
import axios from 'axios';

export default {
    data () {
        return {
            params: [],
            delParams: []
        }
    },
    props: ['loadProgress'],
    components: {
        Loading
    },
    created: function () {
        // DBから値取得
        axios.get('http://localhost:8888/api/song').then((res) => {
            this.params = res.data.posts;
        }).catch((err) => {

        });
    },
    methods: {
        clickDelete (delData, id) {
            // アラート表示
            if (confirm('削除しますか？')) {
                // アラートOK押下時
                for (let key in delData) {
                    // 選択した楽曲のidがDBから取ってきたidと一致している時
                    if (id == delData[key].id) {
                        this.delParams = delData[key];
                    }
                }

                // 削除処理
                axios.delete('http://localhost:8888/api/song/' + id, {data: this.delParams}).then((res) => {
                    alert('削除しました。');
                }).catch((err) => {
                    alert('削除できませんでした。');
                });
            }
        }
    }
}
</script>

<template>
    <div>
        <ul class="list">
            <li class="item" v-for="param of params" :key="param.id">
                <div class="item-inner">
                        <div class="checkbox">
                        <button @click="clickDelete(params, param.id)">削除</button>
                    </div>
                    <div class="photo">
                        <img
                            class="photo-img"
                            :src="param.song_image_url"
                            :alt="param.trackName"
                        />
                    </div>
                    <div class="content">
                        <p>
                            <a
                                class="track"
                                :href="param.song_url"
                                target="_blank"
                                >{{ param.song_name }}</a
                            >
                        </p>
                        <p>
                            <a
                                class="artist"
                                :href="param.artist_url"
                                target="_blank"
                                >{{ param.artist_name }}</a
                            >
                        </p>
                        <div class="data">
                            {{ param.genre }} / ￥{{
                                param.price
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
    text-align: center;
}
input[type='checkbox'] {
    transform: scale(1.5);
}
</style>
