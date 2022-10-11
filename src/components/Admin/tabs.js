import MemberPage from "./Member";
import TeamsPage from "./Teams";

export const tabs = [
    {
        title: 'Members',
        key: 'Members',
        content: <>
            <MemberPage />
        </>
    },
    {
        title: 'Teams',
        key: 'Teams',
        content:<>
        <TeamsPage/>
        </>
    },
    {
        title: 'Advertisers',
        key: 'Advertisers',
        content: 'Advertisers'
    }
]
