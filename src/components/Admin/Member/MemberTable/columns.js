import { Badge } from 'react-bootstrap';
import more from '../../../../assets/Icons/menu.svg';
import UserName from './name';

// const dataArray = [...data];
// const renderListName = dataArray.map((val, ind) => val.Name)
// console.log(renderListName, "names");

export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name',
        // Cell: () => {
        //     return <>
        //         <UserName />
        //     </>
        // }
    },
    {
        Header: 'Role',
        accessor: 'role',
    },
    {
        Header: 'Last Active',
        accessor: 'lastActive'
    },
    {
        Header: 'Create Date',
        accessor: 'createDate'
    },
    {
        Header: 'Member Status',
        accessor: 'memberStatus',
        Cell: ({value}) => {
            let bg = 'primary'
            if (value.toLowerCase() === 'inactive'){
                bg = 'danger'
            }
            return <Badge bg={bg} >{value}</Badge>
        }
    },
    {
        Header: '',
        accessor: 'menu',
        Cell: () => <img src={more} alt='Loading...' />
    }
]