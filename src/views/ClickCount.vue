<template>
  <div>
    <div>
      <button type="button" @click="count++">クリック</button>
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

  methods: {}
}
</script>

<style scoped></style>
