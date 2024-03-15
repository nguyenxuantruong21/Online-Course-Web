export const formatDate = (date) => {
  const dateObject = new Date(date)
  const day = dateObject.getUTCDate()
  const month = dateObject.getUTCMonth() + 1
  const year = dateObject.getUTCFullYear()
  const formattedDateString = `${day}/${month}/${year}`
  return formattedDateString
}
