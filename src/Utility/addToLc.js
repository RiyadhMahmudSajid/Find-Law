const getStoreApp = () =>{
    const storeApp = localStorage.getItem("appointBooking")
    if(storeApp){
        const storeAppoinment = JSON.parse(storeApp)
        return storeAppoinment
    }
    else{
        return [];
    }
}

const addStoreApp = (id) =>{
    const addAppoin = getStoreApp();
    if(addAppoin.includes(id)){
        alert("allready exist");
    }
    else{
        addAppoin.push(id)
        const data = JSON.stringify(addAppoin)
        localStorage.setItem("appointBooking",data)
    }
}

const removeApp = (id) =>{
    const remeveList = getStoreApp();
    const deleteList = remeveList.filter(remove=>remove != id)
    const data = JSON.stringify(deleteList )
     localStorage.setItem("appointBooking",data)

}
export {addStoreApp,getStoreApp,removeApp}