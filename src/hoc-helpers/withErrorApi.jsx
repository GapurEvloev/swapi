import React from "react";
import ErrorMessage from "../components/ErrorMessage";

export const withErrorApi = (View) => {
  return props => {
    const [errorApi, setErrorApi] = React.useState(false);

    return (
      <>
        {
          errorApi ? <ErrorMessage/> :
            (
              <View
                setErrorApi={setErrorApi}
                {...props}
              />
            )
        }
      </>
    )
  }
};