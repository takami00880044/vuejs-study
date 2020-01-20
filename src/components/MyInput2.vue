<template>
  <input
    v-model="innerSearchWord"
    type="text"
    placeholder="タイトルを検索"
  >
</template>

<script>
export default {
  name: 'MyInput',

  model: {
    prop: 'searchWord',
    event: 'input'
  },

  props: {
    searchWord: {
      type: String,
      default: '',
      required: true
    }
  },

  computed: {
    innerSearchWord: {
      get: function () {
        return this.searchWord
      },
      set: function (searchWord) {
        this.$emit('input', searchWord)
      }
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
