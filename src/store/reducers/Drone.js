import * as actions from "../actions";
import moment from 'moment'

const initialState = {
  loading: false,
  timestamp : null,
  temperature: "",
  convertedTimestamp : null,
  latitude: null,
  longitude: null,
  data: {},
  temptime : [],
  metric : []
};



const startLoading = (state, action) => {
  return { ...state, loading: true };
};


const DroneDataRecevied = (state, action) => {
  const { data } = action;
  const dt = data.data;
  const temptime = [];
  const metric = [];
  const dronelocation = dt[dt.length - 1];
  const { latitude ,longitude , timestamp} = dronelocation;

  let i;
  for (i = 0; i < dt.length; i++) { 
    temptime.push(moment(dt[i].timestamp).format())
    metric.push(dt[i].metric)
  }

  return{
    ...state,
    latitude,
    longitude,
    timestamp,
    convertedTimestamp : moment(timestamp).fromNow(),
    data : action.data,
    temptime : temptime,
    metric : metric
  }
 
};

const handlers = {
  [actions.FETCH_DRONE]: startLoading,
  [actions.DRONE_DATA_RECEIVED]: DroneDataRecevied
};

export default (state = initialState, action) => {

  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;

  return handler(state, action);

};
