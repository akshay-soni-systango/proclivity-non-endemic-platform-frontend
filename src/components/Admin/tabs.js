import MemberPage from "./Member";
import AdminSidebar from "./Sidebar";

export const tabs = [
    {
        title: 'Members',
        key: 'Members',
        content: <>
        <MemberPage/>
        </>
    },
    {
        title: 'Teams',
        key: 'Teams',
        content:<>
        <AdminSidebar/>
        </>
    },
    {
        title: 'Brands',
        key: 'Brands',
        content: 'Brands'
    },
    {
        title: 'Brand Safety',
        key: 'Brand Safety',
        content: 'Brand Safety'
    },
    {
        title: 'Locations',
        key: 'Locations',
        content: 'Locations'
    },
    {
        title: 'Integrations',
        key: 'Integrations',
        content: 'Integrations'
    },
    {
        title: 'Security',
        key: 'Security',
        content: 'Security'
    },
    {
        title: 'Account',
        key: 'Account',
        content: 'Account'
    },
    {
        title: 'Biling ',
        key: 'Biling ',
        content: 'Biling '
    }
]
