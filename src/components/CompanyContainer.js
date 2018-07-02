import React, { Component } from 'react';
import Company from './company';
import axios from 'axios';
import '../App.css';

export default class companyContainer extends Component {
    constructor() {
        super();
        this.state = {
            doEdit: false,  
            editComment: '',
        }
    }

    updateComment = (id) => {
        const { editComment, doEdit } = this.state;

        console.log(editComment, doEdit);
       // console.log('this.props.id-----', id);
       // console.log('this.props.city-------', this.props.city);
       // console.log('editComment-------', editComment);
        if(editComment && doEdit) {
            axios.put(`/api/post_comment/${id}`, {...this.props.company, comment: editComment}).then(res => {
                console.log(res.data)
                this.setState({
                    comment: res.data.comment,
                    editComment: '',
                    doEdit: false
                })
              
                this.props.reRender();
            }).catch(err => console.log('Update Comment Error------', err));
        } else {
            this.setState({doEdit: !this.state.doEdit});
        }
      }

    handleChange = (val) => {
       // console.log('MEthod fucking hit----');
        this.setState({editComment: val})
    }
    render() {
        console.log( this.props.company)
        return (
            <div className='company-name'>
                <Company editComment={this.state.editComment} doEdit={this.state.doEdit} updateComment={this.updateComment}
                deleteCompany={this.props.deleteCompany} {...this.props.company} handleChange={this.handleChange}/>
            </div>
        )
    }
}