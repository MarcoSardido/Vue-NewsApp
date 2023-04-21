<script setup>
import { IonIcon } from '@ionic/vue';
const props = defineProps(['data'])
const { author, publishedAt, source, title, url } = props.data
</script>


<template>
    <div class="card app-card">
        <div class="card-content">
            <div class="content-header">
                <span class="title is-5">{{ author !== null ? author : source.name }}</span>
            </div>
            <br>
            <div class="content">
                <span class="subtitle is-4">{{ title }}</span>
            </div>
            <div class="content-footer">
                <span class="subtitle is-6 is-light">{{ publishedAt }}</span>
                <a :href="url"> @{{ source.name }}</a>.
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

</template>
<style>
.app-card {
    max-width: 600px;
    margin-bottom: 20px;
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