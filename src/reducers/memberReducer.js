import { GET_ALL_MEMBERS } from '../actions/index';

const initialState = {
  memberDetails: [],
  singleMember: '',
  getMember: '',
  deleteMember: '',
  memberDetailsError: null,
  singleMemberError: null,
  getMemberError: null,
  deleteMemberError: null
}

function memberReducer(state = initialState, action) {
  let memberDetails;

  switch (action.type) {
    case `${GET_ALL_MEMBERS}_PENDING`:
      return { ...state, loading: true, memberDetailsError: null, singleMemberError: null, getMemberError: null, deleteMemberError: null};

    case `${GET_ALL_MEMBERS}_FULFILLED`:
      memberDetails = action.payload.data;
      return { ...state, loading: false, memberDetails };
    
    case `${GET_ALL_MEMBERS}_REJECTED`:
      return { ...state, loading: false, memberDetailsError: action.payload.data, state: initialState };
    
    default: 
      return state;
  }
}

export default memberReducer;