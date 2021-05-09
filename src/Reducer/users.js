import * as types from './types';
import defaultAttribute from '../../defaultAttribute';
const initialState = {
  characterData: defaultAttribute,
  selectedCharacter: [],
  cpuCharacters: [],
  results: [],
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_CHARACTER:
      return {
        ...state,
        characterData: action.payload,
      };

    case types.SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.payload,
      };

    case types.CPU_CHARACTER:
      return {
        ...state,
        cpuCharacters: action.payload,
      };

    case types.RESTART_CHARACTER:
      return (state = initialState);
  }
  return state;
};

export default users;
