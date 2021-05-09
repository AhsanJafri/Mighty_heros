import * as types from './types';

export function uploadAllCharacter(data) {
  return {
    type: types.UPLOAD_CHARACTER,
    payload: data,
  };
}

export function uploadSelectedCharacter(data) {
  return {
    type: types.SELECTED_CHARACTER,
    payload: data,
  };
}

export function uploadCompCharacted(data) {
  return {
    type: types.CPU_CHARACTER,
    payload: data,
  };
}

export function restartCharacter(data) {
  return {
    type: types.RESTART_CHARACTER,
  };
}
