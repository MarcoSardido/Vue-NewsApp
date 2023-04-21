<script setup>
import { IonIcon } from '@ionic/vue';
import { ref, watch } from 'vue';

const searchedNews = ref('')
const emit = defineEmits(['filterBySearch'])

const handleSearch = (searchedWord) => {
    emit('filterBySearch', searchedWord)
}

watch(() => searchedNews.value, (newVal, oldVal) => {
    setTimeout(() => {
        if (searchedNews.value === newVal) {
            if (searchedNews.value === '') handleSearch('default')
            handleSearch(searchedNews.value)
        }
    }, 2000)
})
</script>

<template>
    <nav class="panel">
        <p class="panel-heading">
            Repositories
        </p>
        <div class="panel-block">
            <p class="control has-icons-left">
                <input v-model="searchedNews" class="input" type="text" placeholder="Search">
                <span class="icon is-left">
                    <ion-icon name="search-sharp" aria-hidden="true"></ion-icon>
                </span>
            </p>
        </div>
        <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>Public</a>
            <a>Private</a>
            <a>Sources</a>
            <a>Forks</a>
        </p>
        <a class="panel-block is-active">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            bulma
        </a>
        <a class="panel-block">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            marksheet
        </a>
        <a class="panel-block">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            minireset.css
        </a>
        <a class="panel-block">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            jgthms.github.io
        </a>
        <a class="panel-block">
            <span class="panel-icon">
                <i class="fas fa-code-branch" aria-hidden="true"></i>
            </span>
            daniellowtw/infboard
        </a>
        <a class="panel-block">
            <span class="panel-icon">
                <i class="fas fa-code-branch" aria-hidden="true"></i>
            </span>
            mojs
        </a>
        <label class="panel-block">
            <input type="checkbox">
            remember me
        </label>
        <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth">
                Reset all filters
            </button>
        </div>
    </nav>
</template>



<style lang="scss" scoped></style>
