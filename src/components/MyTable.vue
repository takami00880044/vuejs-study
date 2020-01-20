<template>
  <table border="2" align="center">
    <colgroup>
      <col>
      <col>
      <col width="80">
      <col width="170">
      <col width="170">
    </colgroup>
    <thead>
    <tr>
      <th>タイトル</th>
      <th>タグ</th>
      <th>いいね数</th>
      <th>投稿日</th>
      <th>更新日</th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="item in items"
      v-bind:key="item.id"
    >
      <td><a v-bind:href="item.url" target="_blank">{{ item.title }}</a></td>
      <td>{{ item.tags }}</td>
      <td>{{ item.likesCount }}</td>
      <td>{{ item.createdAt }}</td>
      <td>{{ item.updatedAt }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MyTable',

  props: {
    items: {
      type: Array,
      default: function () {
        return []
      },
      required: true
    }
  }
}
</script>

<style>
th, td {
  padding: 5px;
}
</style>
