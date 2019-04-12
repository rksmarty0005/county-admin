export const getTilesInitialState = (userType, action, fieldType1, value1, fieldType2, value2) => ({
  title: userType,
  type: action,
  query: [
    {
      field: fieldType1,
      value: value1,
    },
    {
      field: fieldType2,
      value: value2,
    },
  ],
  count: 0,
})
