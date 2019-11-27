<template>
  <div>
    <div>
      <button type="button" v-on:click="handleClickCount">クリック</button>
    </div>
    <div>
      クリック数：{{ count }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClickCount',

  data: function () {
    return {
      count: 0
    }
  },

  methods: {
    handleClickCount () {
      this.count++
    }
  }
}
</script>

<style scoped></style>
