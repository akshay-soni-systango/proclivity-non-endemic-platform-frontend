import DropdownMenu from './dropdown';

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
        accessor: 'memberStatus'
    },
    {
        Header: '',
        accessor: 'menu',
        Cell: ({ row }) => <DropdownMenu row={row}/>
    }
]
