<script setup>
import { IonIcon } from '@ionic/vue';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const goTo = (route) => {
    router.push(route)
}

const categories = ['world', 'politics', 'business', 'opinion', 'science', 'health', 'sports', 'arts', 'book', 'style', 'food', 'travel', 'magazine', 'google', 'apple', 'tesla']


const countries = [['philippines', 'ph'], ['united kingdom', 'gb'], ['u.s', 'us'], ['canada', 'ca'], ['australia', 'au']]
const activeIndexClass = ref(0)
const setActiveIndexClass = (index) => {
    activeIndexClass.value = index
}

const emit = defineEmits(['filterByCountry', 'filterBySearch'])
const handleFilter = (countryCode) => {
    emit('filterByCountry', countryCode)
}
const searchedNews = ref('')
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

const currentDate = ref('')
const dateFormatter = () => {
    const dateObj = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    currentDate.value = formattedDate
}

onMounted(() => {
    dateFormatter()
})
</script>
<template>
    <div class="container">
        <div class="top-header has-text-weight-medium is-capitalized is-size-7">
            <ul>
                <li v-for="(category, index) in categories" :key="index">
                    <a href="#">{{ category }}</a>
                </li>
            </ul>
        </div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="columns">
                <div class="column is-one-quarter">
                    <div class="navbar-date">
                        <span class="has-text-weight-bold is-capitalized is-size-7">{{ currentDate }}</span><br>
                        <span class="has-text-weight-medium is-capitalized is-size-7">today's paper</span>
                    </div>
                </div>
                <div class="column">
                    <div class="navbar-brand">
                        <a class="navbar-item" @click="goTo('/')">
                            <span class="title is-1 is-capitalized header-title">the manila times</span>
                        </a>
                    </div>
                </div>
                <div class="column is-one-quarter">
                        <p class="control has-icons-left">
                            <input v-model="searchedNews" class="input" type="text" placeholder="Search">
                            <span class="icon is-left">
                                <ion-icon name="search-sharp" aria-hidden="true"></ion-icon>
                            </span>
                        </p>
                </div>
            </div>
        </nav>
        <div class="tabs has-text-weight-medium is-size-7 is-centered is-uppercase">
            <ul>
                <li v-for="(country, index) in countries" :key="index" :class="{ 'is-active': activeIndexClass === index }"
                    @click="setActiveIndexClass(index)">
                    <a @click="handleFilter(country[1])">{{ country[0] }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
.top-header {
    display: flex;
    justify-content: center;
    align-items: center;
}

.top-header>ul {
    display: flex;
    gap: 15px;
}

.top-header a {
    color: gray;
    cursor: pointer;
}

.header-title {
    font-family: 'Merriweather', sans-serif;
    font-weight: 700;
    letter-spacing: -1px;
}

.navbar {
    justify-content: space-between;
    align-items: center;
}

.navbar-date {
    line-height: 1;
}

.columns {
    width: 100%;
}

.navbar .column.is-one-quarter {
    display: flex;
    align-items: center;
}

.navbar .column.is-one-quarter:nth-child(3) {
    justify-content: flex-end;
}

.navbar .column.is-one-quarter .control {
    width: 100%;
}

.navbar-brand {
    display: flex;
    justify-content: center;
}
</style>
