import React, { useState } from "react";

import { GoogleLogin } from "react-google-login";

const App = () => {
  const [user, setUser] = useState(null);
  const responseGoogle = (response) => {
    console.log(response);
    setUser(response?.profileObj);
  };
  const responseGoogleFail = (response) => {
    console.log(response);
  };
  const responseGoogleError = (response) => {
    console.log(response);
  };
  return (
    <div>
      {user ? (
        <>
          <img src={user?.imageUrl} alt="" />
          <p>{user?.email}</p>
          <p>{user?.name}</p>
        </>
      ) : (
        <GoogleLogin
          // clientId={process.env.GOOGLE_CLIENT_ID}
          clientId="379965919222-amvdl2cghagep2f3jov9lptdg0cig9ek.apps.googleusercontent.com"
          onFailure={responseGoogleFail}
          onSuccess={responseGoogle}
          onError={responseGoogleError}
          render={(renderProps) => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
              Login
            </button>
          )}
        />
      )}
    </div>
  );
};

export default App;
