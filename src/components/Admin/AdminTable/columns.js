import { Badge } from 'react-bootstrap';
import DropdownMenu from './dropdown';
import UserName from './username';

export const COLUMNS = [
    {
        Header: 'Name',
        id: 'name',
            accessor: ({name, email}) => {
            return {
                name: name,
                email: email,
            }
        },
        Cell: ({value}) => {
            return (
                <UserName name={value.name} email={value.email} />
            )
        }
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
        Cell: ({ row }) => <DropdownMenu row={row} />
    }
]
