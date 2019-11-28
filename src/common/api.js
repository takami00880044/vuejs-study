import axios from 'axios'
import dayjs from 'dayjs'

const axiosInstance = axios.create({
  baseURL: 'https://qiita.com/api/v2/',
  headers: { 'Authorization': 'Bearer d6acfe1ba87339677506d1d861a82ce79e8e1f26' }
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
