import React from "react";
import "./style.scss";
import { Badge, Card } from "react-bootstrap";
import Input from "../../Common/Input";
import Dropdown from "../../Common/Dropdown";
import Heading from "../../Common/Heading";
import { Export, Search } from "../../../assets/Icons"
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Common/Button";
import NewMember from "./NewMember";
import { getMemberListState, getSearchState, getToggleCreateMember, searchMember, toggleSearch } from "../../../Features/Admin/adminSlice";
import AdminTable from "../AdminTable";

const MemberPage = () => {
  const dispatch = useDispatch()
  const gotoMemberPage = useSelector(getToggleCreateMember);
  const memberListState = useSelector(getMemberListState);
  const memberArray = memberListState.members;
  // const searchState = useSelector(getSearchState);
  // const [search, setSearch] = useState("");
  console.log(memberListState, "state in input ");
  // console.log(searchState, " search ++++++++++++");
  const handleChange = (e) => {
    const targetValue = e.target.value
    console.log(targetValue, "target");

    if (targetValue !== "") {

      dispatch(toggleSearch(true));

      const filter = memberArray.filter((value) => value.name.toLowerCase().includes(targetValue.toLowerCase()))
      dispatch(searchMember(filter))
          // console.log(value , "VALUE TO BE SEARCHED")

        // else if (value.name.toLowerCase() === targetValue.toLowerCase()) {
        //   return value

        // }
        // return value
        // )

      //   if (value.memberStatus.toLowerCase() === e.target.value.toLowerCase()) {
      //      dispatch(searchMember(filter))

      //   }
      // 
    }
    else {
      dispatch(toggleSearch(false));
      dispatch(searchMember([]))
    }
    //  value.memberStatus.toLowerCase().includes(e.target.value.toLowerCase()))
    //  dispatch(searchMember(filter))





  }

  const showOptions = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'Active',
      value: 'Active',
    },
    {
      label: 'Deactivated',
      value: 'Deactivated',
    },
  ]
  return (
    <div>
      {gotoMemberPage ? <NewMember /> : <Card>
        <Card.Body>
          <div className="table-header">
            <div className="card-title">
              <Heading level={3} className="mb-0 me-2">
                All Members
              </Heading>

              <Badge bg="light" className="me-2">
                100 active
              </Badge>
            </div>
            <div className="search-filter-sort align-items-start">
              <Input
                onChange={handleChange}
                Icon={Search}
                error=""
                className="mb-0 me-2"
              />
              <Dropdown className="me-2" preValue="Show: " options={showOptions} />
              <Dropdown preValue="Sort: " />
              <div className="ms-auto" >
                <Button text="Export member list" Icon={Export} variant="secondary" />
              </div>
            </div>
          </div>
          <div className="admin-table">
            <AdminTable />
          </div>
        </Card.Body>
      </Card>
      }
    </div>
  );
};

export default MemberPage;
