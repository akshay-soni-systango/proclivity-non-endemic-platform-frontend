export const globalSearch=(searchedValue,searchParams,data)=>{
    const filteredData=[];
    data.map(value => {
        if(searchParams && searchParams.length>0){
            searchParams.map(searchedKey => {
                if(value[searchedKey].toLowerCase().includes(searchedValue.toLowerCase())){
                    if(!filteredData.includes(value)){
                        return filteredData.push(value);
                    }
                }
                return 0;
            });
        }
        return 0
    });
    return filteredData;
}
