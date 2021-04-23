import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMembers } from '../actions/memberActions';

class Memebers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    this.props.getAllMembers();
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.memberDetails !== nextProps.memberDetails) {
      this.setState({ members: nextProps.memberDetails.data}, () => {
        console.log('member details', this.state.members);
      });
    }
  }
  
  render() {
    return (
      <div className="p-5">
        <h3>Member Details</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  memberDetails: state.memberReducer.memberDetails
});

const mapDispatchToProps = dispatch => ({
  getAllMembers: () => {
    dispatch(getAllMembers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Memebers);
