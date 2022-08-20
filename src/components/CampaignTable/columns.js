import Badge from '../Common/Badge'
import {ProgressBar} from 'react-bootstrap';
export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'Name'
    },
    {
        Header: 'Status',
        accessor: 'Status',
        Cell: ({value}) => <Badge>{value}</Badge>
    },
    {
        Header: 'Pacing',
        accessor: 'Pacing',
        Cell: ({value}) => <Badge>{value}</Badge>
    },
    {
        Header: 'Total Budget',
        accessor: 'Total Budget'
    },
    {
        Header: 'Percent',
        accessor: 'Percent',
        Cell: ({value}) => <Badge bg="secondary" >{value}</Badge>
    },
    {
        Header: 'Total Spend',
        accessor: 'Total Spend',
    },
    {
        Header: 'Projected Spend',
        accessor: 'Projected Spend',
        Cell: () =>
            <ProgressBar
            min='0'
            now="30"
            max="100"
            />
    },
    {
        Header: 'Days',
        accessor: 'Days'
    },
    {
        Header: 'Burn Rate',
        accessor: 'Burn Rate',
        Cell: () =>
            <ProgressBar
            min='0'
            now="30"
            max="100"
            />
    }
]