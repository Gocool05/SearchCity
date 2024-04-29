import { AuthProvider } from "@refinedev/core";

  const  AuthProvide = {
  login: async ({ email, password, remember, providerName }) => {
    // You can handle the login process according to your needs.

    // If the process is successful.
    return {
      success: true,
    };

    // return {
    //   success: false,
    //   error: {
    //     name: "Login Error",
    //     message: "Invalid email or password",
    //   },
    // };
  },
  logout: async () => {
    // You can handle the login process according to your needs.

    // If the process is successful.
    return {
      success: true,
    };

    // return {
    //   success: false,
    //   error: {
    //     name: "Login Error",
    //     message: "Invalid email or password",
    //   },
    // };
  },
  check: async () => {
    // You can handle the login process according to your needs.

    // If the process is successful.
    return {
      authenticated: true,
    };

    // return {
    //   success: false,
    //   error: {
    //     name: "Login Error",
    //     message: "Invalid email or password",
    //   },
    // };
  },
  onError: async (error) => {
    // You can handle the login process according to your needs.

    // If the process is successful.
    return {
      logout: true,
    };

    // return {
    //   success: false,
    //   error: {
    //     name: "Login Error",
    //     message: "Invalid email or password",
    //   },
    // };
  },

};

export default AuthProvide;