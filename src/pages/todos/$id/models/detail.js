import pathToRegexp from 'path-to-regexp'
import { query } from '../../services/todo'

export default {

  namespace: 'todoDetails',

  state: {
    data: {
      lodading: true,
      text: '',
      title: '',
    },
    
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/todos/:id').exec(pathname)
        if (match) {
          dispatch({ type: 'query', payload: { id: match[1] } })
        }
      })
    },
  },

  effects: {
    * query ({
      payload,
    }, { call, put }) {
      yield put({
        type: 'querySuccess',
        payload: {
          lodading: true,
        },
      })
      const data = yield call(query, payload)
      const {
        success, message, status, ...other
      } = data
      if (success) {
        console.log('other,,,,',other)
        yield put({
          type: 'querySuccess',
          payload: {
            data: other,
          },
        })
       
      } else {
        throw data
      }
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { data } = payload
      return {
        ...state,
        data,
      }
    },
  },
}
