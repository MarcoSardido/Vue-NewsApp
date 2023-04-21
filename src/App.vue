<script setup>

</script>
<template>
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