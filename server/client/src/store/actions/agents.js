import { FETCH_AGENTS, FETCH_ONE_AGENT } from './actionTypes';
import EasyHomesAxios from '../../shared/APIs/EasyHomes';

export const fetchAgents = () => async (dispatch) => {
  const res = await EasyHomesAxios.get(`/api/v1/agents`);
  return dispatch({
    type: FETCH_AGENTS,
    payload: res.data,
  });
};

export const fetchOneAgent = (id) => async (dispatch) => {
  const res = await EasyHomesAxios.get(`/api/v1/agents/${id}`);
  return dispatch({
    type: FETCH_ONE_AGENT,
    payload: res.data,
  });
};
