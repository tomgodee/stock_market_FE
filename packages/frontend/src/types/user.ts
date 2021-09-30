interface LoginForm {
  username: string;
  password: string;
}

interface Profile {
  id: number;
  name: string;
  role: string;
  money: number;
}

export type {
  LoginForm,
  Profile,
};
