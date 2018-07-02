import React, { Component } from 'react';
import City from './company';
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
       // console.log('this.props.id-----', id);
       // console.log('this.props.city-------', this.props.city);
       // console.log('editComment-------', editComment);
        if(editComment && doEdit) {
            axios.put(`/api/post_comment/${id}`, { company: this.props.company, comment: editComment}).then(res => {
                // this.setState({comment: res.data, editComment: '', doEdit: false})
               // console.log('comment update------');
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
        return (
            <div className='company-name'>
                <City editComment={this.state.editComment} doEdit={this.state.doEdit} updateComment={this.updateComment}
                deleteCompany={this.props.deleteCompany} {...this.props.company} handleChange={this.handleChange}/>
            </div>
        )
    }
}