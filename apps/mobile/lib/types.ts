export interface User {
  id: string;
  phone: string;
  name: string;
}

export interface Transaction {
  id: string;
  type: "sent" | "received";
  amount: number;
  merchant: string;
  date: string;
  status: "pending" | "completed" | "failed";
}

export interface Merchant {
  id: string;
  name: string;
  category: string;
  qrCode?: string;
}
