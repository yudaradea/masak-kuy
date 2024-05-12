class User {
  constructor() {
    this.users = this.getUsers();
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }

  //   Add User
  saveUser(userData) {
    const newUserData = {
      id: Date.now(),
      ...userData,
    };

    const emailExists = this.users.some(
      (user) => user.email === newUserData.email
    );

    if (emailExists) {
      return {
        emailExists: true,
      };
    } else {
      this.users.push(newUserData);
      localStorage.setItem("users", JSON.stringify(this.users));

      return {
        success: true,
      };
    }
  }

  //   Signin User
  signUser(userData) {
    const validation = this.users.some(
      (user) =>
        user.email === userData.email &&
        atob(user.password) === userData.password
    );

    if (validation) {
      localStorage.setItem("loginUser", JSON.stringify(userData.email));
      return {
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}
