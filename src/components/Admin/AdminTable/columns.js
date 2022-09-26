import more from '../../../assets/Icons/menu.svg';
import Brand from '../../../assets/Icons/brand.svg';

export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'Name'
    },
    {
        Header: 'Brands',
        accessor: 'Brands',
        Cell: () => (
            <>
                <span><Brand /></span>
                <span><Brand /></span>
                <span><Brand /></span>
                <span><Brand /></span>
                <span><Brand /></span>

            </>
        )
    },
    {
        Header: 'Role',
        accessor: 'Role'
    },
    {
        Header: 'Last Active',
        accessor: 'Last Active'
    },
    {
        Header: '',
        accessor: 'Menu',
        Cell: () => <img src={more} alt='Loading...' />
    }
]