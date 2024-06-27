const IsAuthenticated = ({ children, role }) => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData?.data.token && storedData.role) {

      window.location.assign(`${storedData?.role}Login/Dashboard`)
  }
    return children;
};

export default IsAuthenticated;