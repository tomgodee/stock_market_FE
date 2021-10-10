interface LoginForm {
  username: string;
  password: string;
}

interface Stock {
  name: string;
  ticker: string;
  amount: number;
  value?: number;
}

interface Profile {
  id: number;
  name: string;
  role: string;
  money: number;
  stocks: Stock[];
}

interface Purchase {
  worth: number;
  stock: {
    name: string;
    ticker: string;
    amount: number;
  }
}

export type {
  LoginForm,
  Stock,
  Profile,
  Purchase,
};
