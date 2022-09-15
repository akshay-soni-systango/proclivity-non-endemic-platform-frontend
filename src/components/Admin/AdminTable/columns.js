import more from '../../../assets/Icons/menu.svg';
import brand1 from '../../../assets/Icons/brand-1.svg';
import brand2 from '../../../assets/Icons/brand-2.svg';
import brand3 from '../../../assets/Icons/brand-3.svg';
import brand4 from '../../../assets/Icons/brand-4.svg';
import brand5 from '../../../assets/Icons/brand-5.svg';

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
                <span><img src={brand1} alt='Loading...' /></span>
                <span><img src={brand2} alt='Loading...' /></span>
                <span><img src={brand3} alt='Loading...' /></span>
                <span><img src={brand4} alt='Loading...' /></span>
                <span><img src={brand5} alt='Loading...' /></span>

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