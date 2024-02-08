export interface Order {
  id: number;
  price: number;
  quantity: number;
  quantityLeft: number;
  dispatchDate: string;
  createdAt: string;
  expiresAt: string;
  quality: string;
  grade: string;
  sku: Sku;
  packing: Packing;
  status: string;
  lastSaleAt: string;
  fishingMethod: string;
  fishingAreaCode: string;
  country: string;
}

export interface Activity {
  id: number;
  price: number;
  currency: string;
  quantity: string;
  dispatch_date: string;
  created_at: string;
  quality: string;
  country: string;
  sku: Sku;
  fishing_method: string;
  brandings: any[];
  grade: string;
  product_certificates: any[];
  supplier_id: number;
  from_demand: number;
}

export interface Packing {
  id: number;
  unit: number;
  label: string;
  amount: number;
}

export interface Sku {
  id?: number; // This is not present in the data in live_demand.ts and accepted_orders.ts
  nature: string;
  species: string;
  type: string;
  variation: string;
}