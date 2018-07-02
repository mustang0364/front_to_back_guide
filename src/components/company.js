import React from 'react';

const City = props => {
    const { doEdit, editComment } = props;
    //console.log('editComment--------', editComment);
    return (
    <div>
        <div>
            <p>{props.company}</p>
            <p>{props.comment}</p>
        </div>
        <button onClick={() => props.deleteCompany(props.id)}>Delete</button>
        <button onClick={() => props.updateComment(props.id)}>Edit </button>
        
        
        <div style={{display: doEdit ? 'inline-block' : 'none'}}>

            <textarea value={editComment} placeholder={props.comment} onChange={e => props.handleChange(e.target.value)}>
            </textarea>
        </div>
    </div>
    );
}

export default City;