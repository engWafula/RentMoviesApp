
import React from 'react';
import  'font-awesome/css/font-awesome.css';


function like(props) {

             let classes="fa fa-heart";
        if(!props.liked) 
        classes+="-o"
        return (
        
                <i onClick={props.onClick}  style={{cursor:"pointer"}} className={classes} aria-hidden="true"></i>
        );

}


export default like;