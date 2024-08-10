import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('button clicked')
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log('button clicked')
        let newText = text.toLowerCase(); 
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log('On Change')
        setText(event.target.value);
    }

    const [text,setText] = useState('Enter Text here');
    // setText('hello');
    return (
        <>
            <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minuter read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
  )
}
