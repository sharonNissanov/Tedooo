type ContentProps = {
    text: string,
    imgs: Array<string>
}
 const Content = (props : ContentProps)=>{

    const NUMBER_OF_IMAGES = 2;
    let relevantImages :Array<string> =[];
    let imgWidth : string;
    let imgsLength : number = props.imgs.length;  

    relevantImages = props.imgs.slice(0, NUMBER_OF_IMAGES);
    //console.log(relevantImages, props.imgs,imgsLength)
    imgWidth  = relevantImages.length != 0 ? ( 100/relevantImages.length) + "%": "";

    return (
        <div>
            <div id='text'>{props.text}</div>
            <div className="content-imgs-container">

                {relevantImages.map((img) => (
                    <img key={img} src={img} alt="Avatar" className="single-content-img" style={{width: imgWidth}}/>
                ))}

            </div>
        </div>
    )
}

export default Content;