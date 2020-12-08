import { FETCH_AGENTS, FETCH_ONE_AGENT } from './actionTypes';
import easyHomesAxios from '../../shared/APIs/easyHomes';

export const fetchAgents = () => async (dispatch) => {
  const res = await easyHomesAxios.get(`/api/v1/agents`);
  return dispatch({
    type: FETCH_AGENTS,
    payload: res.data,
  });
};

export const fetchOneAgent = (id) => async (dispatch) => {
  const res = await easyHomesAxios.get(`/api/v1/agents/${id}`);
  return dispatch({
    type: FETCH_ONE_AGENT,
    payload: res.data,
  });
};
