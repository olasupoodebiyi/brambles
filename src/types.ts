export interface Sale {
  cashierId: number;
  saleAmount: number;
}

export interface SalesState {
  sales: Sale[];
}

export interface SalesAction {
  type: string;
  payload: Sale;
}
