import { request, config } from 'utils'

const { api } = config
const {  todos } = api

export function query (params) {
  return request({
    url: todos,
    method: 'get',
    data: params,
  })
}

export function remove (params) {
  return request({
    url: todos + '/delete',
    method: 'post',
    data: params,
  })
}
