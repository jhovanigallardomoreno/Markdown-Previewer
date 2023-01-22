const { useState } = React;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(
  "# Welcome to my Markdown Previewer!\n\n## Subtitle\n\n### Heading\n\nYou can have inline code, `<div></div>`, between 2 backticks. \n ``` \n// This is a code block: \nfunction anotherExample(firstLine, lastLine) { \n  if (firstLine == '```' && lastLine == '```') { \n     return multiLineCode; \n  } \n} \n``` \nYou can make text **bold!** \n\nThere are [links](https://www.freecodecamp.org), and \n> Block quotes! \n- There are lists \n  - With bullets \n     - With nested items \n        - And other symbols!. \n1. And there are numbered lists too. \n1. You can embed images: \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)");


  function writeMarkdown(newMarkdown) {
    setMarkdown(newMarkdown);
  }

  function getMarkdown() {


    marked.setOptions({
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: true,
      sanitize: true,
      smartypants: false,
      xhtml: false });

    var rawMarkup = marked.parse(markdown);
    return { __html: rawMarkup };
  }

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "headerContainer" }, /*#__PURE__*/
    React.createElement("h1", { id: "title" }, "Markdown Previewer")), /*#__PURE__*/

    React.createElement("div", { id: "main" }, /*#__PURE__*/
    React.createElement("div", { id: "editorContainer" }, /*#__PURE__*/
    React.createElement("h2", { id: "editorTitle" }, "Editor ", /*#__PURE__*/React.createElement("i", { class: "fa fa-edit" })), /*#__PURE__*/
    React.createElement("textarea", { id: "editor", value: markdown, onChange: e => writeMarkdown(e.target.value) })), /*#__PURE__*/

    React.createElement("div", { id: "previewContainer" }, /*#__PURE__*/
    React.createElement("p", { id: "preview", dangerouslySetInnerHTML: getMarkdown() })))));





};

ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById('root'));