import PageNotFound from "../../pages/PageNotFound";
import MemberPage from "./Member";

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
        <PageNotFound/>
        </>
    },
    {
        title: 'Advertisers',
        key: 'Advertisers',
        content: <PageNotFound/>
    }
]
