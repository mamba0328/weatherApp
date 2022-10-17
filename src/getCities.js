async function getCities() {
    try { 
        const myData = await fetch('../../src/current.city.list.json', { mode: "cors" })
        const json = await myData.json()
        const cities = [];
        
        for(let ct of json) { 
            cities.push(ct.name)
        }
        
        return cities
    } catch { 
        return console.log('no cts =(')
    }
}

export default getCities