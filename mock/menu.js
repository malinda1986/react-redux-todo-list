const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '98',
    name: 'Todos',
    icon: 'edit',
    route: '/todos',
  },
  {
    id: '99',
    mpid: '-1',
    bpid: '98',
    name: 'Your todo',
    route: '/todos/:id',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
