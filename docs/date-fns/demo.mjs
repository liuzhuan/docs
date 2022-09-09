import { format, addDays } from 'date-fns'

const result = format(new Date(1996, 3, 11), 'yyyy-MM-dd')
console.log(result)

const today = new Date()
const tomorrow = addDays(today, 1)
console.log('today:', today, 'tomorrow:', tomorrow)
