import React from 'react'
import { Editor } from 'components'
import { Row, Col, Card, Form } from 'antd'



export default class EditorPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editorContent: null,
    }
  }
  onEditorStateChange = (editorContent) => {
    this.setState({
      editorContent,
    })
  }
  render () {
    const { editorContent } = this.state
    const colProps = {
      lg: 12,
      md: 24,
    }
    
    return (<div className="content-inner">
      <Row gutter={32}>
        <Col {...colProps}>
          
          <Card title="Description" style={{ overflow: 'visible' }}>
            <Editor
              wrapperStyle={{
                minHeight: 400,
              }}
              editorStyle={{
                minHeight: 300,
              }}
              editorState={editorContent}
              onEditorStateChange={this.onEditorStateChange}
            />
          </Card>
        </Col>
      </Row>
    </div>)
  }
}
