<script setup>
import { IonIcon } from '@ionic/vue';
const props = defineProps(['data'])
</script>


<template>
    <div class="columns">
        <div class="column post-column is-two-thirds">
            <div class="card-container">
                <div class="card app-card" v-for="newsData, idx in props.data.slice(0, 10)" :key="idx">
                    <div class="card-content">
                        <div class="content-header">
                            <span class="title is-5" v-if="newsData.description">{{ newsData.title }}</span>
                            <span class="title is-5" v-else>{{ newsData.author }}</span>
                        </div>
                        <br>
                        <div class="content">
                            <div class="post-content">
                                <span class="subtitle is-5" v-if="newsData.description">{{ newsData.description }}</span>
                                <span class="subtitle is-5" v-else>{{ newsData.title }}</span>
                            </div>
                            <div class="post-image" v-if="newsData.description">
                                <img :src="newsData.urlToImage" alt="" />
                            </div>
                        </div>
                        <div class="content-footer">
                            <span class="subtitle is-6 is-light">{{ newsData.publishedAt }}</span>
                            <a href="#" v-if="newsData.description"> @{{ newsData.author }}</a>.
                            <a :href="newsData.url"> @{{ newsData.source.name }}</a>.
                            <div class="button-group">
                                <button class="">
                                    <span class="icon like">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </span>
                                </button>
                                <button class="">
                                    <span class="icon comment">
                                        <ion-icon name="chatbox-outline"></ion-icon>
                                    </span>
                                </button>
                                <button class="">
                                    <span class="icon share">
                                        <ion-icon name="repeat-outline"></ion-icon>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card app-card" v-for="newsData, idx in props.data.slice(10)" :key="idx">
                <div class="card-content">
                    <div class="content-header">
                        <div v-if="newsData.description">
                            <img :src="newsData.urlToImage" alt="" />
                        </div>
                        <span class="title is-5" v-if="newsData.description">{{ newsData.title }}</span>
                        <span class="title is-5" v-else>{{ newsData.author }}</span>
                    </div>
                    <br>
                    <div class="content">
                        <span class="subtitle is-5" v-if="newsData.description">{{ newsData.description }}</span>
                        <span class="subtitle is-5" v-else>{{ newsData.title }}</span>
                    </div>
                    <div class="content-footer">
                        <span class="subtitle is-6 is-light">{{ newsData.publishedAt }}</span>
                        <a href="#" v-if="newsData.description"> @{{ newsData.author }}</a>.
                        <a :href="newsData.url"> @{{ newsData.source.name }}</a>.
                        <div class="button-group">
                            <button class="">
                                <span class="icon like">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </span>
                            </button>
                            <button class="">
                                <span class="icon comment">
                                    <ion-icon name="chatbox-outline"></ion-icon>
                                </span>
                            </button>
                            <button class="">
                                <span class="icon share">
                                    <ion-icon name="repeat-outline"></ion-icon>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.post-column {
    border-right: 1px solid #d0d0d0;
}

.card-container::-webkit-scrollbar {
    display: none;
}

.app-card {
    margin-bottom: 10px;
}

.card-content .content {
    display: flex;
}

.card-content .content .post-image {
    width: 90%;
}

.content-footer>.button-group>button {
    border: none;
    background: transparent;
    font-size: 25px;
}

.content-footer>.button-group {
    margin-top: 10px;
}

.icon {
    cursor: pointer;
}

.icon.like:hover {
    color: #f95f82;
}

.icon.share:hover {
    color: #7ff7a1;
}

.icon.comment:hover {
    color: #2bbbdb;
}

.icon.comment {
    margin: 0px 10px;
}
</style>