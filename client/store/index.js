import Vuex from 'vuex'

export const state = () => ({
    lists: [],
    errors: []
})

export const actions = {
    // 一覧取得
    async getSongs({ commit }, user_id) {
        const res = await this.$axios
            .$get(`http://localhost:8888/api/song/${user_id}`)
            .then((res) => {
                console.log(res)
                commit('setSongs', res)
            })
            .catch(err => {})
    },
    // 楽曲削除
    async delSong({ commit }, delData) {
        const res = await this.$axios
            .$delete('http://localhost:8888/api/song/' + delData.id, {
                data: delData
            })
            .then(res => {
                commit('delSong', delData.id)
                alert('削除しました。')
            })
            .catch(err => {
                alert('削除できませんでした。')
            })
    },
    // 検索結果一覧取得
    async searchGetSongs({ commit }, name) {
        const res = await this.$axios
            .$get(
                `//itunes.apple.com/search?term=${name}&country=jp&entity=musicVideo`
            )
            .then(res => {
                commit('searchSetSongs', res)
            })
            .catch(err => {})
    },
    // 楽曲登録
    async postSongs({ commit }, postData) {
        const res = await this.$axios
            .$post('http://localhost:8888/api/song', postData)
            .then(res => {
                console.log(res)
                alert('登録しました。')
            })
            .catch(err => {
                alert('登録できません')
            })
    },
    // ログイン
    async getLoginUser({ commit }, postParams) {
        const res = await this.$axios
            .$get(
                `http://localhost:8888/api/login?email=${postParams[0].email}&password=${postParams[0].password}`
            )
            .then(res => {
                commit('setLoginUser', res)
                // user_idを保持して画面遷移
                this.$router.push({
                    path: '/',
                    query: {
                        user_id: res.user_id
                    }
                });
            })
            .catch(err => {
                // エラーメッセージをオブジェクトに格納
                const postErr = {
                    emailErr: err.response.data.errors.email,
                    passErr: err.response.data.errors.password
                }

                commit('setErrors', postErr)
            })
    },
    // 会員登録
    async postRegister({ commit }, postData) {
        const res = await this.$axios
            .$post('http://localhost:8888/api/register', postData)
            .then(res => {
                console.log(res.post)
                commit('setRegsterUser', res.post)
                this.$router.push({
                    path: '/',
                    query: {
                        user_id: res.post.user_id
                    }
                })
            })
            .catch(err => {
                // エラーメッセージをオブジェクトに格納
                const postErr = {
                    nameErr: err.response.data.errors.name,
                    emailErr: err.response.data.errors.email,
                    passErr: err.response.data.errors.password
                }

                commit('setErrors', postErr)
            })
    }
}

export const mutations = {
    setSongs(state, data) {
        state.lists = data.post;
    },
    delSong() {
        state.lists
    },
    searchSetSongs(state, data) {
        state.lists = data.results
    },
    postSongs() {
        state.lists
    },
    setLoginUser(state, data) {
        state.lists = data
    },
    setErrors(state, data) {
        state.errors = data
    },
    setRegsterUser(state, data) {
        state.lists = data
    }
}
