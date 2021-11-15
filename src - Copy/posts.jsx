import React from 'react'
import {Route,useRouteMatch,useParams} from 'react-router-dom'


const Posts = () => {
    const match = useRouteMatch();
    return (
        <>
         <Route path={match.path+"/:id"} component={Post} />
            
        </>
    )
}

const Post=()=>{
    const param=useParams();
    return(
        <>
        Post {param.id}
        </>
    )
}

export default Posts
