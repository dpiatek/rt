import type { Order } from "@rt/interfaces";

export interface AcceptedOrders {
  results: Order[];
}

export const acceptedOrders: AcceptedOrders = {
  "results": [
    {
      "id": 5,
      "price": 9.5,
      "quantity": 99,
      "quantityLeft": 0,
      "dispatchDate": "2023-09-25T13:30:00Z",
      "createdAt": "2023-09-22T03:14:21Z",
      "expiresAt": "2023-09-23T00:00:00Z",
      "quality": "E",
      "grade": "2-3Kg",
      "sku": {
        "nature": "frozen",
        "species": "Cod",
        "type": "handcut filet",
        "variation": "skin on"
      },
      "packing": {
        "id": 42,
        "unit": 2,
        "label": "47.1514Kg",
        "amount": 47.15
      },
      "status": "ACCEPTED",
      "lastSaleAt": "2023-09-22T09:02:48Z",
      "fishingMethod": "dredges",
      "fishingAreaCode": "27.7.a",
      "country": "ENG"
    },
    {
      "id": 9,
      "price": 11.44,
      "quantity": 83,
      "quantityLeft": 0,
      "dispatchDate": "2023-09-26T13:30:00Z",
      "createdAt": "2023-09-22T03:14:24Z",
      "expiresAt": "2023-09-23T00:00:00Z",
      "quality": "A+",
      "grade": "2-3Kg",
      "sku": {
        "nature": "cooked",
        "species": "Shrimp (black tiger )",
        "type": "under protective atmosphere",
        "variation": "cooked"
      },
      "packing": {
        "id": 42,
        "unit": 2,
        "label": "47.1514Kg",
        "amount": 47.15
      },
      "status": "ACCEPTED",
      "lastSaleAt": "2023-09-22T09:02:43Z",
      "fishingMethod": "farmed",
      "fishingAreaCode": "27.4.c",
      "country": "ENG"
    }
  ]
}
