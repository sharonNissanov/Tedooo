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

    // function getAverageRGB(imgEl:any){
    // try{
    //     let blockSize = 5, // only visit every 5 pixels
    //     defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
    //     canvas = document.createElement('canvas'),
    //     context = canvas.getContext && canvas.getContext('2d'),
    //     data, width, height,
    //     i = -4,
    //     length,
    //     rgb = {r:0,g:0,b:0},
    //     count = 0;

    // if (!context) {
    //     console.log(defaultRGB)

    //     return defaultRGB;
    // }

    // height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    // width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    // context.drawImage(imgEl, 0, 0);

    // try {
    //     data = context.getImageData(0, 0, width, height);
    // } catch(e) {
    //     /* security error, img on diff domain */
    //     console.log(defaultRGB, "security error, img on diff domain")
    //     return defaultRGB;
    // }

    // length = data.data.length;

    // while ( (i += blockSize * 4) < length ) {
    //     ++count;
    //     rgb.r += data.data[i];
    //     rgb.g += data.data[i+1];
    //     rgb.b += data.data[i+2];
    // }

    // // ~~ used to floor values
    // rgb.r = ~~(rgb.r/count);
    // rgb.g = ~~(rgb.g/count);
    // rgb.b = ~~(rgb.b/count);
    // console.log(rgb)
    // return rgb;
    // }
    // catch(e){
    // console.log('error', e)
    // }

    //     return null;
    
    // }
    return (
        <div>
            <div className="text-container">{props.text}</div>
            <div className="content-imgs-container">
                {relevantImages.map((img) => (
                    // onLoad={(img)=>{getAverageRGB(img.target)}}
                    <img  key={img} onMouseOver={test} src={img}   alt="Avatar" className="single-content-img" style={{maxWidth: imgWidth}}/>
                ))}

            </div>
        </div>
    )
}

export default Content;