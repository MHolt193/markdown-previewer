import React from "react";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";
import Footer from "./Components/Footer"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    }
    this.handleChange = this.handleChange.bind(this)
  }
    handleChange (e){
      this.setState({
        markdown: e.target.value
      });
    }

  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1>MH Markdown Previewer</h1>
        <Editor value={this.state.markdown} onChange={this.handleChange} />
        <Preview markdown={this.state.markdown} />
        <Footer />
      </div>
    );
  }
}
const placeholder = `# This is a Header

## This is a sub header
### And here's some other cool stuff:

This is inline code:  \`<div></div>\` Two back-ticks allows this

\`\`\`
//This is multi-line code: made with three back-ticks

const codeExample = () =>{

}

\`\`\`
you can create a link by entering the words inside [] and the link inside ()
This is a [link](https://github.com/MHholt193) to my GitHub.

 You can **BOLD TEXT** by adding two stars around it.
 >A Block Quote is innitiate with a '>'

Numbered List:
1. number one
2. number two
3. number three

You can also do images!
![ReactJS logo](https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg)
`;

export default App;
