import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # H1

  ## H2

  [title](https://www.example.com)

  \`code\`

  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\` 

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <h1>Markdown preview</h1>
      <div className="container">
        <div className='editorBox'>
          <textarea id="editor" onChange={(event) => {
            setText(event.target.value);
          }}
            value={text}
          ></textarea>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
      </div>

    </div>
  )
}

export default App
