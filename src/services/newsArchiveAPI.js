import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export async function fetchAllArticles(from, to) {
  if (from && to) {
    const response = await axiosInstance.get(`/articles?from=${from}&to=${to}`)
    return response
  }

  const response = await axiosInstance.get('/articles')
  return response
}
