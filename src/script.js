const { useState } = React;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(
    "# Welcome to my Markdown Previewer!\n\n## Subtitle\n\n### Heading\n\nYou can have inline code, `<div></div>`, between 2 backticks. \n ``` \n// This is a code block: \nfunction anotherExample(firstLine, lastLine) { \n  if (firstLine == '```' && lastLine == '```') { \n     return multiLineCode; \n  } \n} \n``` \nYou can make text **bold!** \n\nThere are [links](https://www.freecodecamp.org), and \n> Block quotes! \n- There are lists \n  - With bullets \n     - With nested items \n        - And other symbols!. \n1. And there are numbered lists too. \n1. You can embed images: \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
    );
  
  function writeMarkdown(newMarkdown) {
    setMarkdown(newMarkdown)
  }
  
  function getMarkdown() {

    
    marked.setOptions({
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: true,
      sanitize: true,
      smartypants: false,
      xhtml: false
    });
    var rawMarkup = marked.parse(markdown);
    return {__html: rawMarkup };
  }
  
  return (
    <div>
      <div id="headerContainer">
        <h1 id="title">Markdown Previewer</h1>
      </div>
      <div id="main">
        <div id="editorContainer">
          <h2 id="editorTitle">Editor <i class="fa fa-edit"></i></h2>
          <textarea id="editor" value={markdown} onChange={(e) => writeMarkdown(e.target.value)}></textarea>
        </div>
        <div id="previewContainer">
          <p id="preview" dangerouslySetInnerHTML={getMarkdown()}>
          </p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root'))