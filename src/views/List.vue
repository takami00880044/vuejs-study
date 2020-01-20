<template>
  <div>
    <input type="text" placeholder="タイトルを検索">

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
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'List',

  components: {},

  data: function () {
    return {
      items: [
        {
          id: '1d27a0dde1eeafe38910',
          title: '自分の投稿したQiita記事のPV数をAPIで取得する',
          tags: 'Qiita,Python',
          likesCount: 1,
          createdAt: '2019/11/13 13:10:29',
          updatedAt: '2019/11/13 13:13:35'
        },
        {
          id: '19dc2dc1f97271ee8c6a',
          title: 'AWS SAM CLI を使って、ローカルでLambda環境を構築する',
          tags: 'AWS,lambda,aws-sam-cli',
          likesCount: 1,
          createdAt: '2019/11/12 23:33:43',
          updatedAt: '2019/11/13 20:11:25'
        },
        {
          id: '2a3bd019dab3dc0eb3f2',
          title: 'Railsチュートリアル 第9章 発展的なログイン機構 - Remember me 機能',
          tags: 'Rails,初心者,Railsチュートリアル',
          likesCount: 1,
          createdAt: '2019/11/10 17:07:28',
          updatedAt: '2019/11/10 17:07:28'
        }
      ]
    }
  },

  computed: {},

  created: function () {},

  methods: {}
}
</script>

<style scoped>
input {
  margin-bottom: 5px;
  width: 200px;
}

th, td {
  padding: 5px;
}
</style>
