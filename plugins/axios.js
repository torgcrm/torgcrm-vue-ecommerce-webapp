import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080/torgcrm-ecommerce-web/',
  headers: {'Project-Host': 'domain.ru'}
})
