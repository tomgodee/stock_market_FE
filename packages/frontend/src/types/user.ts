interface LoginForm {
  username: string;
  password: string;
}

interface Profile {
  id: number;
  name: string;
  role: string;
}

export type {
  LoginForm,
  Profile,
};
