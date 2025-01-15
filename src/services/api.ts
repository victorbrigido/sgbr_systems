import axios from 'axios';

const api = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/',
});

export const getBrands = () => api.get('carros/marcas');

export const getModels = (brandId: string) => 
  api.get(`carros/marcas/${brandId}/modelos`);

export default api;
