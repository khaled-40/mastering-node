const processOrder = (order) => {
    console.log(`processing order for ${order}`)

    setTimeout(() => {
        console.log(`${order} is cooking`)
        console.log(`${order} has been processed`)
    }, 3000);

    
}

console.log('Taking order for lobster');
processOrder('lobstar')
console.log('finished the order')