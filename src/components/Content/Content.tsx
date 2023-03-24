import { FastAverageColor } from 'fast-average-color';
import {saveAs} from 'file-saver';
import logo from '../../logo.svg';
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
    imgWidth  = relevantImages.length != 0 ? ( 100/relevantImages.length) + "%": "";

    function test3(e:any,){
        console.log(e.target.src)
        const file = new Blob ([e.target.src], {type:"jpg"})
    //    saveAs(file, "sharon-"  + e.target.src);
    }
    // function test2(e:any){
    //     const fac = new FastAverageColor();
    //     let newImg :HTMLImageElement= document.createElement("img");
    //     newImg.src = e.target.src;
    //     newImg.crossOrigin ="anonymous";
    //     //if(newImg !=null){
    //       //  newImg.onload((e:any)=>{
    //             // fac.getColorAsync(newImg)
    //             // .then(color => {
    //             //     console.log(color)
    //             // })
    //             // .catch(e => {
    //             //     console.log(e);
    //             // });    
    //        // }) 
    //   //  }

    //   fac.getColorAsync(logo)
    //   .then(color => {
    //       console.log(color)
    //   })
    //   .catch(e => {
    //       console.log(e);
    //   });    

    // }
    

    return (
        <div>
            <div id='text'>{props.text}</div>
            <div className="content-imgs-container">
                {relevantImages.map((img) => (
                    <img  key={img} onLoad={test3} src={img} alt="Avatar" className="single-content-img" style={{maxWidth: imgWidth}}/>
                ))}

            </div>
        </div>
    )
}

export default Content;