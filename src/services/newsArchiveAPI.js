import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export async function fetchAllArticles() {
  const response = await axiosInstance.get('/articles')
  return response
}
