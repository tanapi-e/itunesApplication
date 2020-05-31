<script>
import axios from 'axios';
import {mapActions, mapState} from 'vuex';

export default {
    data() {
        return {
            name: ''
        }
    },
    computed: {
        ...mapState({
            items: state => state.lists,
        })
    },
    methods: {
        ...mapActions({
            searchGetSongs: 'searchGetSongs'
        }),
        clickSearch() {
            this.$emit('loadStart');
            this.searchGetSongs(this.name);
            this.$emit('loadComplete', { results: this.items });
        }
    }
}
</script>

<template>
    <div>
        <div class="container">
            <input class="text" type="text" v-model="name" @keyup.enter="clickSearch" />
            <input class="submit" type="submit" value="Search" @click="clickSearch" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    height: 70px;
    padding: 20px;
    background-color: #35495e;
    box-sizing: border-box;
}

.text {
    width: 50%;
    max-width: 300px;
    padding: 0.5em;
    border: none;
}

.submit {
    padding: 0.5em 2em;
    margin-left: 10px;
    color: #fff;
    background-color: #42b883;
    border: none;
    border-radius: 20px;
}
</style>
