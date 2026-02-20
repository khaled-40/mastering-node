const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`)
    callback(customer)
}
const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`)

    setTimeout(() => {
        console.log(`order is cooking`)
        console.log(`order has been processed for ${customer}`)
        callback(customer)
    }, 3000);
}

const completeOrder = (customer) => {
    console.log(`order completed for ${customer}`)
}

takeOrder('Shafiq', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer)
    })
})