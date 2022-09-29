import more from '../../../../assets/Icons/menu.svg';
import team1 from '../../../../assets/Icons/team1.svg';
import team2 from '../../../../assets/Icons/team2.svg';
import team3 from '../../../../assets/Icons/team3.svg';
import team4 from '../../../../assets/Icons/team4.svg';
import team5 from '../../../../assets/Icons/team5.svg';
import user from '../../../../assets/Icons/userIconDark.svg';


export const COLUMNS = [
    {
        Header: 'Team Name',
        accessor: 'Team Name',
        Cell: () => (
            <>
                <img src={user} alt='...Loading' />
                <span>Team Name</span>
            </>
        )
    },
    {
        Header: 'Role',
        accessor: 'Role',
        Cell: () => (
            <>
                <span><img src={team1} alt='Loading...' /></span>
                <span><img src={team2} alt='Loading...' /></span>
                <span><img src={team3} alt='Loading...' /></span>
                <span><img src={team4} alt='Loading...' /></span>
                <span><img src={team5} alt='Loading...' /></span>
                <span><img src={user} alt='Loading...' /></span>
            </>
        )
    },
    {
        Header: '',
        accessor: 'Menu',
        Cell: () => <img src={more} alt='Loading...' />
    }
]