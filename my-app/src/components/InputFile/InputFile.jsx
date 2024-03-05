import React, { useState } from 'react'
import MarkdownEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

function MarkdownEditorComponent() {
  const [markdown, setMarkdown] = useState('')
  const handleEditorChange = ({ text }) => {
    setMarkdown(text)
  }

  console.log(markdown)
  return (
    <div>
      <MarkdownEditor value={markdown} onChange={handleEditorChange} style={{ height: '150px', width: '900px' }} />
    </div>
  )
}

export default MarkdownEditorComponent
