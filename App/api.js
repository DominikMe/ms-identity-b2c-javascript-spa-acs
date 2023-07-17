function callApi(endpoint, token, idTokenClaims) {
    
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
        method: "GET",
        headers: headers
      };
  
    logMessage('Getting ACS token...');
  
    fetch(endpoint, options)
      .then(response => response.json())
      .then(response => {

        if (response) {
          logMessage('Received token for user ' + response.acsUserId);
          joinCall(response.acsUserId, response.acsUserToken, idTokenClaims);
        }
        
        return response;
      }).catch(error => {
        console.error(error);
      });
  }