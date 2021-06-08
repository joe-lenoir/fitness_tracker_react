//first attempt (based on user_hub_react project)

import axios from 'axios';

const BASE = 'https://fitnesstrac-kr.herokuapp.com/api';
//"https://jsonplace-univclone.herokuapp.com/";

export async function getUsers() {
  try {
    const { data } = await axios.get(`${ BASE }/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getRoutinesByUser(userId) {
  try {
    const { data } = await axios.get(`${ BASE }/users/${ userId }/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

