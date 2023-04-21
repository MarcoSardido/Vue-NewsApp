<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const goTo = (route) => {
    router.push(route)
}

const countries = [['philippines', 'ph'], ['united kingdom', 'gb'], ['u.s', 'us'], ['canada', 'ca'], ['australia','au']]
const activeIndexClass = ref(0)
const setActiveIndexClass = (index) => {
    activeIndexClass.value = index
}


const emit = defineEmits(['filterByCountry'])
const handleFilter = (countryCode) => {
    emit('filterByCountry', countryCode)
}

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
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="columns">
                <div class="column is-one-fifth">
                    <div class="navbar-date">
                        <span class="has-text-weight-bold is-capitalized is-size-7">{{ currentDate }}</span><br>
                        <span class="has-text-weight-medium is-capitalized is-size-7">today's paper</span>
                    </div>
                </div>
                <div class="column is-three-fifths">
                    <div class="navbar-brand">
                        <a class="navbar-item" @click="goTo('/')">
                            <span class="title is-1 is-capitalized header-title">the manila times</span>
                        </a>
                    </div>
                </div>
                <div class="column"></div>
            </div>
        </nav>
        <div class="tabs has-text-weight-medium is-size-7 is-centered is-uppercase">
            <ul>
                <li v-for="(country, index) in countries" 
                  :key="index"
                  :class="{ 'is-active': activeIndexClass === index }"
                  @click="setActiveIndexClass(index)">
                    <a @click="handleFilter(country[1])">{{ country[0] }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
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

.column.is-one-fifth {
    display: flex;
    align-items: center;
}

.navbar-brand {
    display: flex;
    justify-content: center;
}
</style>
