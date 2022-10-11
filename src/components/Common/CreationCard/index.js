import { Field, useFormikContext } from "formik";
import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { Close, Search } from "../../../assets/Icons";
import Checkbox from "../Checkbox";
import Heading from "../Heading";
import Input from "../Input";
import "./style.scss";


const CreationCard = ({
  headerTitle,
  headerDescription,
  totalSelected,
  checkList,
  fieldName,
}) => {
  console.log("------", checkList);
  const { values } = useFormikContext();  
  return (
    <div className="card-wrapper">
      <div className="row">
        <div className="col-md-8">
          <Input className="mb-0" Icon={Search} />
          <Card className="tab-card">
            <div className="card-header col-part">
              <p className="light-para fw-normal mb-0">{headerTitle}</p>
              <Heading className="light-title" level={6}>
                {headerDescription}
              </Heading>
            </div>
            <div className="card-body col-part">
              {checkList.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <Field name={fieldName}>
                      {({ field }) => (
                        <>
                          <p className="mb-0">
                            <Checkbox
                              {...field}
                              id={item.id}
                              text={item.text}
                              value={item.text}
                            />
                          </p>
                          <Heading className="light-title" level={6}>
                            {item.description}
                          </Heading>
                        </>
                      )}
                    </Field>
                  </Fragment>
                );
              })}
            </div>
          </Card>
        </div>
        <div className="col-md-4">
          <Heading level={5}>{totalSelected}</Heading>
          {values?.[fieldName]?.map((item, key) => {
            return (
              <Card className="mt-0 mb-1">
                <div
                  className="d-flex justify-content-between align-items-center p-2"
                  key={key}
                >
                  <Heading level={6} className="mb-0">
                    {item}
                  </Heading>
                  <Close />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreationCard;
