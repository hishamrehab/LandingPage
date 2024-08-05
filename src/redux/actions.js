import { BOOKING, DELETE } from "./actionsTypes";

export const makeBooking = (data) => {
  return {
    type: BOOKING,
    payload: data,
  };
};

export const deleteBooking = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
