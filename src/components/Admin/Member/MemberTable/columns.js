import more from '../../../../assets/Icons/menu.svg';
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