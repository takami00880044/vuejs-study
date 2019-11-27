import axios from 'axios'
import dayjs from 'dayjs'

const axiosInstance = axios.create({
  baseURL: 'https://qiita.com/api/v2/',
  headers: { 'Authorization': 'Bearer 5e1b82069715b6553c4cb799adb5e6b780f2fab7' }
})

function getItems () {
  return axiosInstance.get('items', {
    params: {
      page: 1,
      per_page: 100,
      query: `created:` + dayjs().format('YYYY-MM-DD')
    }
  })
}

export default {
  getItems
}
