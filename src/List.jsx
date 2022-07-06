import React from 'react'


const List = (props) => {
    
    const deleteFromList=(key)=>{
       const newList= props.list.filter((itmObj)=>{
        return(
            itmObj.key!==key
        )
        });

        props.updateList(newList)
    }

    const onCheck=(key)=>{
        const newList= props.list.filter((itmObj)=>{
            return(
                itmObj.key!==key
            )
            });
    
            props.updateList(newList)
    }
  return (
    <div className='containerList'>

    {props.list.map((itmObj)=>{
        return(
            <div className="items">
            <input type="checkbox" onChange={()=>{onCheck(itmObj.key)}}/>
            <span style={itmObj.done?{textDecoration:"line-through"}:null}>{itmObj.item}</span>
            <button className='delete' onClick={()=>deleteFromList(itmObj.key)}>X</button>
            </div>
            )
             
    })}
    </div>
  )
}

export default List