import { FETCH_AGENTS, FETCH_ONE_AGENT } from './actionTypes';
import EasyHomesAxios from '../../shared/APIs/EasyHomes';

// const BASE_URL = `${process.env.PUBLIC_URL}/easy-homes`;
const BASE_URL = `${process.env.PUBLIC_URL}`;

export const fetchAgents = () => async (dispatch) => {
  const res = await EasyHomesAxios.get(`${BASE_URL}/api/v1/agents`);
  return dispatch({
    type: FETCH_AGENTS,
    payload: res.data,
  });
};

export const fetchOneAgent = (id) => async (dispatch) => {
  const res = await EasyHomesAxios.get(`${BASE_URL}/api/v1/agents/${id}`);
  return dispatch({
    type: FETCH_ONE_AGENT,
    payload: res.data,
  });
};
