import React from 'react';
import Input from "../Input";
import { Search as SearchIcon } from "../../../assets/Icons"

const Search=({placeholder, ...props})=>{
    const { handleChange, value } = props;
    return(
        <Input
            Icon={SearchIcon}
            error=""
            className="mb-0 me-2"
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
        />
    )
}

export default Search;