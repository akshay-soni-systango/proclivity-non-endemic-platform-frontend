import more from '../../../../assets/Icons/menu.svg';
import brand1 from '../../../../assets/Icons/brand-1.svg';
import brand2 from '../../../../assets/Icons/brand-2.svg';
import brand3 from '../../../../assets/Icons/brand-3.svg';
import brand4 from '../../../../assets/Icons/brand-4.svg';
import brand5 from '../../../../assets/Icons/brand-5.svg';
import data from '../../../../util/CampaignData/ADMIN_MEMBER.json'
import UserName from './name';

// const dataArray = [...data];
// const renderListName = dataArray.map((val, ind) => val.Name)
// console.log(renderListName, "names");

export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'Name',
        Cell: () => {
            return <>
                <UserName />
            </>
        }
    },
    {
        Header: 'Role',
        accessor: 'Role',
    },
    {
        Header: 'Last Active',
        accessor: 'Last Active'
    },
    {
        Header: 'Create Date',
        accessor: 'Create Date'
    },
    {
        Header: 'Member Status',
        accessor: 'Member Status'
    },
    {
        Header: '',
        accessor: 'Menu',
        Cell: () => <img src={more} alt='Loading...' />
    }
]