import safeGet from 'lodash.get'

export const selectUserRecords = state => {
  if (!state.searchUserList) return []
  return Array.isArray(state.searchUserList.users) ? state.searchUserList.users : []
}

export const isLoading = state => {
  return state.searchUserList.fetching || false
}

export const getSearchParams = ({ searchUserList }) => {
  if (!searchUserList) return {}
  const { from, size, sort, query } = searchUserList
  const out = {}
  out.from = from
  out.size = size
  out.sort = (Array.isArray(sort) && sort.length && sort) || undefined
  out.query = (Array.isArray(query) && query.length && query) || undefined
  return out
}

export const getSerializedSearchParams = ({ searchUserList }) => {
  return encodeURIComponent(JSON.stringify(getSearchParams({ searchUserList })))
}

export const checkOfficeNames = offices => {
  if (offices && offices.length !== 0) {
    return offices.filter(value => value.trim() !== '')
  } else {
    return []
  }
}

export const cardHeaderText = state => {
  const roles = safeGet(state, 'searchUserList.adminAccountDetails.roles', [])
  const countyName = safeGet(state, 'searchUserList.adminAccountDetails.county_name', '')
  const role = roles || []
  if (role.includes('Super-admin')) {
    return 'Global Administrator view'
  } else if (role.includes('State-admin')) {
    return 'State Administrator View'
  } else {
    return `County: ${countyName}`
  }
}

export const displayChangeLog = state => {
  const roles = safeGet(state, 'searchUserList.adminAccountDetails.roles', [])
  if (roles.includes('Super-admin')) {
    return false
  } else if (roles.includes('State-admin')) {
    return false
  }
  return true
}