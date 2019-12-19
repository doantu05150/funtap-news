import axios from 'axios'

const API_URL = process.env.WEB_URL || 'http://localhost:3000'

const api = axios.create({
  baseURL: `${API_URL}/api`,
})

/**
 * Danh sách  bài  viết hỗ trợ
 */
export const getSupportPostWithCategory = () => {
  return api.get('/faq-with-category')
}

/**
 * Chi tiết bài  viết hỗ trợ
 * @param {getFeaturedSellingProductsParams} params Additional parameters
 */
export const getSupportPostDetails = slug => api.get(`/faq/${slug}`)

/**
 * @typedef {object} getNewsParams
 * @property {number} per_page
 * @property {number} page
 */
/**
 * Chi tiết  chuyên mục hỗ trợ
 * @param {getNewsParams} params Additional parameters
 */
export const getCategoryDetails = slug => api.get(`/faq-of-category/${slug}`)

/**
 * @typedef {object} getNewsParams
 * @property {number} per_page
 * @property {number} page
 */
/**
 * Tìm kiếm bài viết
 * @param {getNewsParams} params Additional parameters
 */
export const search = (params = { keyword: '', page: 1, limit: 10 }) =>
  api.get(`/article_search`, { params })

/**
 * @typedef {object} getNewsParams
 * @property {number} per_page
 * @property {number} page
 */
/**
 * Trang chủ hỗ trợ
 * @param {getNewsParams} params Additional parameters
 */
export const homePosts = (params = { limit: 3 }) => api.get(`/faq-home`, { params })
