interface Company {
  id: number;
  name: string;
  ticker: string;
  description: string;
  stock_price: number;
}

interface CompanyState {
  companies: Company[];
  selectedCompany: Company;
}

export type {
  Company,
  CompanyState,
};
