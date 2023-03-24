import { formGroupClasses } from "@mui/material";

/**
 * calc te differenct between startDate and today
 * @param startDate 
 */
const getDiff = (startDate:string) => {
    let second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7,month=day*30 , year=(1000*60*60*24*365);
    let date1:any = new Date(startDate);
    let date2:any = new Date(); //today
    let timediff:any = date2 - date1;
    let res:any;
    let units:any =[
        {unit:second, max: 60, name:" seconds"},
        {unit:minute, max: 60, name:" minutes"},
        {unit:hour, max: 24, name:" hours"},
        {unit:day, max:30, name:" days"},
        {unit:week, max: 4, name:" weeks"},
        {unit:month, max: 12, name:" months"},
        {unit:year, max: null, name:" years"}
    ]
    units.forEach((data:any)=>{
        data.diff =  Math.floor(timediff / data.unit);
        if(data.max != null ){
            if( data.diff <  data.max && res == undefined){
                res = data.diff + data.name;        
            }
        }
         if(data.max == null &&  res == undefined) { //years case
             res = data.diff + data.name;
        }
    });



    console.log(date1.toLocaleString(), units, res)
    return res;
}
export default getDiff;