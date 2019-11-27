<template>
  <div>
    <my-input @input="handleInput"></my-input>

    <my-table v-bind:items="filterItems"></my-table>
  </div>
</template>

<script>
import dayjs from 'dayjs'

import api from '@/common/api'

import MyInput from '@/components/MyInput'
import MyTable from '@/components/MyTable'

export default {
  name: 'List',

  components: {
    'my-input': MyInput,
    'my-table': MyTable
  },

  data: function () {
    return {
      searchWord: '',

      items: []
    }
  },

  computed: {
    filterItems: function () {
      const filterItems = this.items.map(function (item) {
        const tags = item.tags.reduce(function (accumulator, tag) {
          return accumulator + tag.name + ','
        }, '').slice(0, -1)

        return {
          id: item.id,
          title: item.title,
          url: item.url,
          tags: tags,
          likesCount: item.likes_count,
          createdAt: dayjs(item.created_at).format('YYYY/MM/DD HH:mm:ss'),
          updatedAt: dayjs(item.updated_at).format('YYYY/MM/DD HH:mm:ss')
        }
      })

      if (this.searchWord === '') return filterItems

      return filterItems.filter((item) => {
        return item.title.match(this.searchWord)
      })
    }
  },

  created: function () {
    this.fetchItems()
  },

  methods: {
    fetchItems: function () {
      api.getItems()
        .then((res) => {
          this.items = res.data
        })
        .catch((e) => {
          console.log(e)
        })
    },

    handleInput (searchWord) {
      this.searchWord = searchWord
    }
  }
}
</script>

<style scoped></style>
