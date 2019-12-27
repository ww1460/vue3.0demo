import request from '@/router/axios'
export function fetchList(query) {
  return request({
    url: '/app/mock/225486/ww123',
    method: 'get',
    params: query
  })
}