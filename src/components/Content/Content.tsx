import { FastAverageColor } from 'fast-average-color';

type ContentProps = {
    text: string,
    imgs: Array<string>
}




 const Content = (props : ContentProps)=>{


    const fac = new FastAverageColor();


    const NUMBER_OF_IMAGES = 2;
    let relevantImages :Array<string> =[];
    let imgWidth : string;
    let imgsLength : number = props.imgs.length;  

    relevantImages = props.imgs.slice(0, NUMBER_OF_IMAGES);
    //console.log(relevantImages, props.imgs,imgsLength)
    imgWidth  = relevantImages.length != 0 ? ( 100/relevantImages.length) + "%": "";

function test(str:string): void{
    fac.getColorAsync(str)
    .then(color => {
        console.log(color)
    })
    .catch(e => {
        console.log(e);
    });
}

    

    return (
        <div>
            <div id='text'>{props.text}</div>
            <div className="content-imgs-container">

                {relevantImages.map((img) => (
                    <img key={img} onLoad={()=>{test(img)}} src={img} alt="Avatar" className="single-content-img" style={{maxWidth: imgWidth}}/>
                ))}

            </div>
        </div>
    )
}

export default Content;