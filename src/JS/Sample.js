import React from 'react'
import {useEffect} from 'react'

const Sample = () => {
    // const arr=[];

    useEffect(async() => {
        const sumPromise=(array)=>{
            return   new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let sum = 0;
                    array.forEach(element => {
                        sum+=element;
                    });
                    resolve(sum);
                },1000);
            })
        }
            const result=await sumPromise([7,7,8,4,]);
            console.log(result);
        
        
    }, []);
    return (
        <div>
            <h1>sample code</h1>
        </div>
    )
}

export default Sample
