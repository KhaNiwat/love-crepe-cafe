import React from 'react';
import Styles from '../Search/Search.module.css';
import { Search as SearchIcon } from '@mui/icons-material';

export default function Search() {
   return (
     <div className={Styles.container}>
        <div className={Styles.group}>
          {/* <SearchIcon className={Styles.icon}/> */}
          <input placeholder="Search" type="search" className={Styles.input} />
        </div>
     </div>
   );
}
