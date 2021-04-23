import axios from 'axios';
import { GET_ALL_MEMBERS, GET_SINGLE_MEMBER, DELETE_MEMBER, CREATE_MEMBER, UPDATE_MEMBER } from './index';

export function getAllMembers() {
  return {
    type: GET_ALL_MEMBERS,
    payload: axios.get('https://reqres.in/api/users/')
  };
}

