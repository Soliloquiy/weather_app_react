import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { styled } from '@mui/material/styles';

const CustomizedPaper = styled(Paper) `
    margin: auto;
    margin-top: 20px;
    border: 1px solid #4CAF50;
    border-radius: 50px;
    transition: all 250ms ease-in-out;

`;

const SearchBar = ({ change, submit, value }) => {
    return (
        <div className='search_bar'>
            <CustomizedPaper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
                onSubmit={submit}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search City eg, London"
                    inputProps={{ 'aria-label': 'search location' }}
                    type="text"
                    value={value}
                    onChange={change}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <MyLocationIcon />
                </IconButton>
        </CustomizedPaper>
    </div>
    )
}

export default SearchBar;