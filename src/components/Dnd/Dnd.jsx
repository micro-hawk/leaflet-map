import React from 'react';
import "./Dnd.css";
import india_states from "../../data/india_states.json";

export default function Dnd () {
    window.onload=function(){
        const item=document.getElementById('item');
        item.addEventListener('dragtart', dragStart);

    //function
    function dragStart () {
        console.log("Drag starts")
    }
    }
    


    return(
        <div className="dnd-container">
            <div draggable="true">
                <h1 id="item" draggable="true" >helll</h1>
            </div>
        </div>
    );
}