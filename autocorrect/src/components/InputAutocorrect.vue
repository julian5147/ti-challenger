<script>
export default {
  data() {
    return {
      words: {
        Alcol: "alcohol",
        canbio: "Cambio",
        corason: "corazón",
      },
      value: "",
    };
  },

  methods: {
    autocorrect() {
      this.value = this.words[this.value];
    },
  },
};
</script>

<template>
  <div class="greetings">
    <input v-model="value" placeholder="word" v-on:change="autocorrect()" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
