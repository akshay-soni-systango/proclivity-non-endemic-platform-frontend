import React from 'react';
import Input from "../Input";
import { Search as SearchIcon } from "../../../assets/Icons"

const Search=(props)=>{
    const { handleChange } = props;
    return(
        <Input
            Icon={SearchIcon}
            error=""
            className="mb-0 me-2"
            onChange={handleChange}
            // value={value}
        />
    )
}

export default Search;