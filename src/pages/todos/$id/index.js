import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import { Skeleton, Card, Icon } from 'antd'

const { Meta } = Card

const Detail = ({ todoDetails }) => {
  const { data } = todoDetails
  return (<div className="content-inner">
    <div className={styles.content}>
      
      <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<span><Icon type="clock-circle" theme="outlined" /> {data ? data.createTime : ''}</span>]}

        >
          <Skeleton loading={ data && data.text ? false : true} avatar active>
            <Meta
             
              title={data ? data.title : ''}
              description={data ? data.text :''}
            />
          </Skeleton>
        </Card>
    </div>
  </div>)
}

Detail.propTypes = {
  todoDetails: PropTypes.object,
}

export default connect(({ todoDetails, loading }) => ({ todoDetails, loading: loading.models.todoDetails }))(Detail)
