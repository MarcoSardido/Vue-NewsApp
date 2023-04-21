<script setup>
import { handleError, onMounted, reactive, ref, toRefs, computed, watch } from 'vue';
import axios from 'axios'
import Navbar from './components/Navbar.vue'
import Post from './components/Post.vue'
import SidePanel from './components/SidePanel.vue';

// News API Key
const apiKey = import.meta.env.VITE_NEWS_API_KEY

const isLoading = ref(true)
const state = reactive({
  news: [],
  filteredNews: []
})
const { news, filteredNews } = toRefs(state)

const dateFormat = (dateString) => {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const formattedTime = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });

  return `${formattedTime} - ${formattedDate}`
}


watch(() => !isLoading.value, (newVal, oldVal) => {
  if (!newVal) return

  const newNewsFormat = []
  if (state.filteredNews.length > 0) {
    for (const data of state.filteredNews) {
      newNewsFormat.push({
        title: data.title,
        author: data.author,
        publishedAt: dateFormat(data.publishedAt),
        source: data.source,
        title: data.title,
        url: data.url
      })
    }
    state.filteredNews = newNewsFormat
  } else {
    for (const data of state.news) {
      newNewsFormat.push({
        title: data.title,
        author: data.author,
        publishedAt: dateFormat(data.publishedAt),
        source: data.source,
        title: data.title,
        url: data.url
      })
    }
    state.news = newNewsFormat
  }

})

const filterNewsByCountry = async (countryCode) => {
  isLoading.value = true
  try {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&pageSize=20&apiKey=${apiKey}`)
    state.news = res.data.articles
    isLoading.value = false
  } catch (error) {
    switch (error.res?.status) {
      case 400: break;
      case 401: break;
      case 404: break;
      case 500: break;
    }
    handleError(error)
    throw error
  }
}

const filterNewsBySearch = async (searchedWord) => {
  isLoading.value = true
  // If search input is empty clear the filteredNews array
  // and display the news array
  if (searchedWord === 'default' || searchedWord === '') {
    state.filteredNews = []
    isLoading.value = false
  } else {
    try {
      const res = await axios.get(`https://newsapi.org/v2/everything?q=${searchedWord}&pageSize=20&apiKey=${apiKey}`)
      state.filteredNews = res.data.articles
      isLoading.value = false
    } catch (error) {
      switch (error.res?.status) {
        case 400: break;
        case 401: break;
        case 404: break;
        case 500: break;
      }
      handleError(error)
      throw error
    }
  }


}

onMounted(async () => {
  try {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=ph&pageSize=20&apiKey=${apiKey}`)
    state.news = res.data.articles
    isLoading.value = false
  } catch (error) {
    switch (error.res?.status) {
      case 400: break;
      case 401: break;
      case 404: break;
      case 500: break;
    }
    handleError(error)
    throw error
  }
})
</script>
<template>
  <Navbar @filterByCountry="filterNewsByCountry" />
  <div class="container">

    <div class="columns">
      <div class="column is-one-quarter">

      </div>


      <div class="column post-column is-three-fifths">

      </div>
      <div class="column">
      </div>
    </div>

  </div>
</template>
<style>
.container {
  padding: 10px 0;
  width: 100%;
  height: auto;
}

.post-column {
  display: flex;
  justify-content: center;
}

.card-container {
  max-height: 75vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.card-container::-webkit-scrollbar {
  display: none;
}

/* Loaders */
.custom-loader {
  width: 25px;
  height: 25px;
  margin-top: 10rem;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #485fc7);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
  animation: s3 1s infinite linear;
}

@keyframes s3 {
  to {
    transform: rotate(1turn)
  }
}
</style>