import React from "react";
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios,
} from "react-axios";

const api = (props) => {
  // const something = { State: "VIC", WaterConsum: "60000", familySize: "5" };

  return (
    <div>
      <Post
        url="https://27gtcma2qg.execute-api.ap-southeast-2.amazonaws.com/test"
        data={props.data}
      >
        {(error, response, isLoading, makeRequest, axios) => {
          console.log(response);
          if (error) {
            return (
              <div>
                Something bad happened: {error.message}{" "}
                <button
                  onClick={() => makeRequest({ params: { reload: true } })}
                >
                  Retry
                </button>
              </div>
            );
          } else if (isLoading) {
            return <div>Loading...</div>;
          } else if (response !== null) {
            return (
              <div>
                {response.data.message}{" "}
                <button
                  onClick={() => makeRequest({ params: { refresh: true } })}
                >
                  Refresh
                </button>
              </div>
            );
          }
          return <div>Default message before request is made.</div>;
        }}
      </Post>
    </div>
  );
};

export default api;
