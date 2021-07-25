import './Components.css'
const Editor = (props) =>{
    return <div className="card col-6">
        <p className="card-header text-center">Editor</p>
        <textarea  rows="10" className="card-body" value={props.value} onChange={props.onChange} id="editor">

        </textarea>
    </div>
}

export default Editor;