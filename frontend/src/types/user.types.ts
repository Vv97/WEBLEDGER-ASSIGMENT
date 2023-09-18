export interface userProps {
  handleShowSignup: () => void;
  handleShowLogin: () => void;
}

// sign up types

export interface SignupInterface {
  username: string;
  email: string;
  password: string;
}

export interface UserInterface {
  username: string;
  email: string;
}

export interface SignupResponseInterface {
  message: string;
  user: UserInterface;
  token: string;
}

// login types

export interface showLoginInterface {
  showLogin: boolean;
  setShowLogin: (e: boolean) => void;
}
