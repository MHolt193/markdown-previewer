import marked from "marked";
const Preview = (props) => {
    return (
        <div className="card col-6 bg-blue bg-gradient">
            <p className="card-header text-center">Markdown Previewer</p>
            <div className="card-body" id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown)}}>
             
            </div> 
        </div>
    )
}
marked.setOptions({
    breaks: true,
    gfm: true,
})
export default Preview