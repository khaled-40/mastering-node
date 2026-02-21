const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const newMeeting = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10.00 PM'
        }
        resolve(newMeeting)
    }
    else {
        reject(new Error('Meeting already scheduled'))
    }
})

const addToCalendar = (newMeeting) => {
    const calendar = `${newMeeting.name} has been scheduled on ${newMeeting.location} at ${newMeeting.time}`
    return Promise.resolve(calendar)
}

meeting
    .then(res => {
        console.log(res)
        return res
    })
    .then(addToCalendar)
    .then(res => console.log(res))
    .catch(err => console.log(err.message))

console.log('hello')