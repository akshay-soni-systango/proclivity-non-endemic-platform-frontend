import ViewReportGraph from "./charts";

export const tabs = [
    {
        title: 'Tab 1',
        key: 'Summary',
        content: <>
           <ViewReportGraph/>
        </>
    },
    {
        title: '+ Add',
        key: '+ Add',
        content:'Configuration'
    },
    {
        title: 'Activity',
        key: 'Activity',
        content: 'Activity'
    },
    {
        title: 'Related',
        key: 'Related',
        content: 'Related'
    }
]
