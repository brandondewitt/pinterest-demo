import { createSelector } from 'reselect';

export const pins = state => state.pins.list;
export const pin = state => state.pins.listItem;

export const pinSelector = createSelector(
  pin,
  pins,
  (pin, pins) => {
    return {
      pin,
      pins
    };
  }
);
