import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import classnames from 'classnames'
import { DropOption } from 'components'
import { Link } from 'react-router-dom'
import AnimTableBody from 'components/DataTable/AnimTableBody'
import styles from './List.less'

const { confirm } = Modal

const List = ({
  onDeleteItem, onEditItem, isMotion, location, ...tableProps
}) => {

  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: 'Are you sure delete this record?',
        onOk () {
          onDeleteItem(record.id)
        },
      })
    }
  }

  const columns = [
   {
      title: 'Title',
      dataIndex: 'title',
      width:100,
      key: 'title',
      render: (text, record) => <Link to={`todos/${record.id}`}>{text}</Link>,
    }, {
      title: 'Text',
      width:200,
      dataIndex: 'text',
      key: 'text',
    }, {
      title: 'Operation',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: 'Update' }]} />
      },
    },
  ]

  const AnimateBody = (props) => {
    return <AnimTableBody {...props} />
  }

  const CommonBody = (props) => {
    return <tbody {...props} />
  }

  return (
    <Table
      {...tableProps}
      className={classnames(styles.table, { [styles.motion]: isMotion })}
      bordered
      scroll={{ x: 1250 }}
      columns={columns}
      simple
      rowKey={record => record.id}
      components={{
        body: { wrapper: isMotion ? AnimateBody : CommonBody },
      }}
    />
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List
