<template>
    <div class="root">
        <Search
            class="search"
            @onLoadStart="onLoadStart"
            @loadComplete="onLoadComplete"
        />
        <List :loadProgress="loadProgress" />
    </div>
</template>

<script>
import Search from '@/components/Search';
import List from '@/components/List';
import Result from '@/components/Result';

export default {
    data() {
        return {
            items: [],
            loadProgress: false
        }
    },
    methods: {
        onLoadStart() {
            this.loadProgress = true;
        },
        onLoadComplete({ results }) {
            this.items = results;
            this.loadProgress = true;
            this.$router.push('/result');
        }
    },
    components: {
        Search,
        List
    }
}
</script>

<style scoped>
.root {
    padding-top: 70px;
}

.search {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>

<style>
html {
    font-size: 62.5%;
}

body {
    margin: 0;
    color: #35495e;
}

p {
    margin: 0;
}

ul {
    padding: 0;
    margin: 0;
}
</style>
