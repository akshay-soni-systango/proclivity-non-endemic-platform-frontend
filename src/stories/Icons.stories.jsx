// import { Meta, ColorPalette, ColorItem } from '@storybook/addon-docs';
// import {Add} from '../assets/Icons'

import {
    Title,
    Subtitle,
    Description,
    Primary as StoryBookPrimary,
  } from '@storybook/addon-docs';
  import Input from '../components/Common/Input'

import { useState } from 'react';
import { iconList } from '../components/Common/Icons';


export default {
  title: "Icons",
  parameters: {
    docs: {
        source: {
          code: null
        },
        page: () => (
            <>
              <Title />
              <Subtitle />
              <Description />
              <StoryBookPrimary />
            </>
          ),
    }
  }
};



export const PrimaryDropdown = () => {
   const [search, setSearch] =  useState('')
  
  return (
    <>
    <div className="row">
        <div className="col-12">
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="search icon" className="w-100" />
        </div>
    </div>
    <div className="row">
      {iconList.filter(({name}) => name.toLowerCase().includes((search || '').toLowerCase())).map(({ Icon, name  }) => {
        return (
          <div key={name} className="col-2 mb-3">
            <div className="align-items-stretch card d-flex justify-content-center text-center h-100">
              <Icon className="w-100 my-3" />
              {name}
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};
