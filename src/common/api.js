import axios from 'axios'
import dayjs from 'dayjs'

const axiosInstance = axios.create({
  baseURL: 'https://qiita.com/api/v2/',
  headers: { 'Authorization': 'Bearer 78c6206f3efa19266f38a1ddbb52ca689ccc36b6' }
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
