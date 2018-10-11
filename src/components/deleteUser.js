const deleteUser = async _id => {
  return await fetch(`https://create-user-backend-axmjvpznmy.now.sh/${_id}`, {
    method: "delete"
  }).then(response => {
    response.json().then(json => {
      return json;
    });
  });
};
export default deleteUser;
