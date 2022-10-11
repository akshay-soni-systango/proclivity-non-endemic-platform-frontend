import React, { Fragment } from "react";
import { Field} from "formik";
import Checkbox from "../Checkbox";
import Heading from "../Heading";

const Checklist = ({
    checkList,
    fieldName,
}) => {
    // console.log("++++++++", checkList);
  return (
    <div className="card-body col-part">
      {checkList?.map((item) => {
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
  );
};

export default Checklist;
