<template>
  <input
    v-model="searchWord"
    type="text"
    placeholder="タイトルを検索"
    @input="handleInput"
  >
</template>

<script>
export default {
  name: 'MyInput',

  data: function () {
    return {
      searchWord: ''
    }
  },

  methods: {
    handleInput () {
      this.$emit('input', this.searchWord)
    }
  }
}
</script>

<style scoped>
input {
  margin-bottom: 5px;
  width: 200px;
}
</style>
