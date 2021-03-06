import {
  FETCH_DETAILS_API_CALL_REQUEST,
  CLEAR_USER_DETAILS,
  SAVE_USER_DETAILS_API_CALL_REQUEST,
  HANDLE_DROPDOWN_CHANGE,
  CLEAR_SAVE_ALERT,
  HANDLE_USER_INPUT_CHANGE,
  FETCH_CHANGE_LOG_DETAILS_API_CALL_REQUEST,
  USER_STATUS_CHANGE_REQUEST,
} from './actionTypes'

export const handleDropdownChangeAction = (name, value) => ({
  type: HANDLE_DROPDOWN_CHANGE,
  payload: { name, value },
})

export const handleInputChangeAction = (name, value) => ({
  type: HANDLE_USER_INPUT_CHANGE,
  payload: { name, value },
})

export function fetchDetailsActions(id) {
  return { type: FETCH_DETAILS_API_CALL_REQUEST, payload: { id: id } }
}

export function fetchChangeLogAdminDetailsActions(id) {
  return { type: FETCH_CHANGE_LOG_DETAILS_API_CALL_REQUEST, payload: { id: id } }
}

export const clearDetails = () => ({
  type: CLEAR_USER_DETAILS,
})

export const clearSaveAlert = () => ({
  type: CLEAR_SAVE_ALERT,
})

export function saveUserDetailsActions(id, details, initialDetails, isRolesDisabled) {
  return {
    type: SAVE_USER_DETAILS_API_CALL_REQUEST,
    payload: { id: id, details: details, initialDetails: initialDetails, isRolesDisabled },
  }
}

export function handleStatusChangeAction(id) {
  return {
    type: USER_STATUS_CHANGE_REQUEST,
    payload: { id },
  }
}
