import { request, config } from 'utils'

const { api } = config
const { todo } = api

export function query (params) {
  return request({
    url: todo,
    method: 'get',
    data: params,
  })
}

export function create (params) {
  return request({
    url: todo.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export function remove (params) {
  return request({
    url: todo,
    method: 'delete',
    data: params,
  })
}

export function update (params) {
  return request({
    url: todo,
    method: 'patch',
    data: params,
  })
}
