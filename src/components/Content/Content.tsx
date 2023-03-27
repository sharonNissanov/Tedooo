type ContentProps = {
    text: string,
    imgs: Array<string>
}

 const Content = (props : ContentProps)=>{

    const NUMBER_OF_IMAGES = 2;
    let relevantImages :Array<string> =[];
    let imgWidth : string;
    relevantImages = props.imgs.slice(0, NUMBER_OF_IMAGES);
    imgWidth  = relevantImages.length != 0 ? ( 60/relevantImages.length) + "%": "";

    function test(){
       // console.log("hover")
    }

    return (
        <div>
            <div className="text-container">{props.text}</div>
            <div className="content-imgs-container">
                {relevantImages.map((img) => (
                    <img  key={img} onMouseOver={test} src={img} alt="Avatar" className="single-content-img" style={{maxWidth: imgWidth}}/>
                ))}

            </div>
        </div>
    )
}

export default Content;