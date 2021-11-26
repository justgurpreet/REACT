import React, { Component } from 'react'

export default class CustomerRow extends Component {
    render() {
        let {firstName, lastName} = this.props.customer;
        return (
            <div className="row">
              {firstName} &nbsp; {lastName}
              <button type="button">Delete</button>
            </div>
        )
    }
}
