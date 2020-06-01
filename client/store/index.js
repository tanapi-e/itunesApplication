import Vuex from 'vuex';

export const state = () => ({
    lists: []
})

export const actions = {
    // 一覧取得
    async getSongs({ commit }) {
        const res = await this.$axios
            .$get(`http://localhost:8888/api/song`)
            .then((res) => {
                commit('setSongs', res);
            }).catch((err) => {

            });
    },
    // 楽曲削除
    async delSong({ commit }, delData) {
        const res = await this.$axios
            .$delete('http://localhost:8888/api/song/' + delData.id, {
                data: delData
            })
            .then(res => {
                commit('delSong', delData.id);
                alert('削除しました。');
            })
            .catch(err => {
                alert('削除できませんでした。');
            });
    },
    // 検索結果一覧取得
    async searchGetSongs({ commit }, name) {
        const res = await this.$axios
            .$get(
                `//itunes.apple.com/search?term=${name}&country=jp&entity=musicVideo`
            )
            .then(res => {
                commit('searchSetSongs', res);
            })
            .catch(err => {});
    },
    // 楽曲登録
    async postSongs({ commit }, postData) {
        const res = await this.$axios
            .$post('http://localhost:8888/api/song', postData)
            .then(res => {
                console.log(res)
                alert('登録しました。');
            })
            .catch(err => {
                alert('登録できません');
            });
    }
}

export const mutations = {
    setSongs(state, data) {
        state.lists = data.posts;
    },
    delSong() {
        state.lists;
    },
    searchSetSongs(state, data) {
        state.lists = data.results;
    },
    postSongs() {
        state.lists;
    }
}
