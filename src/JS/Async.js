import React from 'react'
import { useEffect } from 'react'

//<---call back function--->
// const Async = () => {
//     useEffect(() => {
//         const firstFunction=(a,b,next)=>{ //firstFunction is declaring with parameters a, b and next.
    
//             let c = a+ "," +b;
//             next(c);  //next() is second function 
//         }
//         const secondFunction=(result) => {
//                 console.log(result);
//         }
//         firstFunction("Hello","There",secondFunction);  //fn calling
//     }, []);

//<-- call back to declare the function-->

    // const Async = () => {
    //     useEffect(() => {
    //         const firstFunction=(a,b,next)=>{ //firstFunction is declaring with parameters a and b
    //             setTimeout(()=>{
    //            let c=  a+ "," +b;
    //            next(c);
    //         },500);
    //     }
    //         firstFunction("Geethu","Suresh",(result) => {   //fn calling
    //             console.log(result);
    //         })  
    //  }, []);
//<-- promise-->

const Async = () => {
    useEffect(async() => {
        const myPromise=(a,b)=>{
          return   new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let c=a+ "," +b;
                    reject({error:true});
                },500);
        })
        }
        
    // myPromise("Hello","There")
    // .then((result)=>{
    //         console.log(result);
    //    }).catch(result=>{
    //     console.log("catch",result);
    //    })
    try{
        const result=await myPromise("GEethu","Suresh");
        console.log(result);
    }catch(error){
        console.log("catch",error);
    }
        
 }, []);
    return (
        <div>
            <h1>Asynchronous Functions</h1>
            
        </div>
    )
}

export default Async
