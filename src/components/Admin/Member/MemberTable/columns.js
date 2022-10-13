import DropdownMenu from './dropdown';
import { Badge } from 'react-bootstrap';

export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Role',
        accessor: 'role'
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
        Cell: ({ row }) => <DropdownMenu row={row}/>
    }
]
