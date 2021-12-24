import React  from 'react'

export default function About(props) {
    // const [mystyle, setStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // });

    // const [buttonText, setbuttonText] = useState('Enable Dark Mode')
    // const togglefunct = ()=>{
    //         if(mystyle.color === 'white')
    //         {
    //             setStyle({
    //                 color : 'black',
    //                 backgroundColor : 'white'
    //             });
    //             setbuttonText('Enable Dark Mode')
    //         }
    //         else{
    //             setStyle({
    //                 color : 'white',
    //                 backgroundColor : 'black',
    //                 border : '0.5px Solid White'
    //             });
    //             setbuttonText('Enable light Mode')
    //         }
    // }

    let myStyle = {
        color : props.mode === 'dark'?'white': '#112c46',
        backgroundColor :  props.mode === 'dark'?'#112c46': 'white',
    }
    return (
        <>
        <div className='continer my-3'>
            <h1 className='my-3'>About Us</h1>
          <div className="accordion" id="accordionExample">
        <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
                <strong>This is the textUtil</strong> It analyze your text and help in writing good text . Here You covert To upperCase and lowercase ,Remove extra space ,clear text and copy text
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Free To use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the open Source so free to use 🙂</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Flexibale</strong>
            </button>
            </h2>
            <div id="collapseThree"  style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>It is flexiable app and work with all type of device lik android , PC , ipad etc</strong> 
            </div>
            </div>
       </div>
       </div>
        </div>

        {/* <div className="container" >
        <button type="button" onClick={togglefunct} style={mystyle} class="btn btn-primary">{buttonText}</button>
        </div> */}
        </>
    )
}
