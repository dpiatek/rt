import type { Order } from "@rt/interfaces";

export interface LiveDemand {
  results: Order[];
}

export const liveDemand: LiveDemand = {
  "results": [
    {
      "id": 9,
      "price": 11.44,
      "quantity": 83,
      "quantityLeft": 77,
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
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "farmed",
      "fishingAreaCode": null,
      "country": null
    },
    {
      "id": 10,
      "price": 2.72,
      "quantity": 83,
      "quantityLeft": 12,
      "dispatchDate": "2023-09-26T13:30:00Z",
      "createdAt": "2023-09-22T03:14:24Z",
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
        "id": 40,
        "unit": 2,
        "label": "27.0706Kg",
        "amount": 27.07
      },
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "surrounding/lift nets",
      "fishingAreaCode": null,
      "country": null
    },
    {
      "id": 7,
      "price": 4.66,
      "quantity": 92,
      "quantityLeft": 66,
      "dispatchDate": "2023-09-26T13:30:00Z",
      "createdAt": "2023-09-22T03:14:23Z",
      "expiresAt": "2023-09-23T00:00:00Z",
      "quality": "B",
      "grade": "2-3Kg",
      "sku": {
        "nature": "alive",
        "species": "Plaice",
        "type": "whole",
        "variation": "gutted"
      },
      "packing": {
        "id": 40,
        "unit": 2,
        "label": "27.0706Kg",
        "amount": 27.07
      },
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "surrounding/lift nets",
      "fishingAreaCode": null,
      "country": null
    },
    {
      "id": 8,
      "price": 7.57,
      "quantity": 51,
      "quantityLeft": 38,
      "dispatchDate": "2023-09-26T13:30:00Z",
      "createdAt": "2023-09-22T03:14:23Z",
      "expiresAt": "2023-09-23T00:00:00Z",
      "quality": "B",
      "grade": "2-3Kg",
      "sku": {
        "nature": "fresh",
        "species": "Cod",
        "type": "machine cut filet",
        "variation": "queue avec peau"
      },
      "packing": {
        "id": 42,
        "unit": 2,
        "label": "47.1514Kg",
        "amount": 47.15
      },
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "farmed",
      "fishingAreaCode": null,
      "country": null
    },
    {
      "id": 6,
      "price": 12.4,
      "quantity": 94,
      "quantityLeft": 40,
      "dispatchDate": "2023-09-26T13:30:00Z",
      "createdAt": "2023-09-22T03:14:22Z",
      "expiresAt": "2023-09-23T00:00:00Z",
      "quality": "A",
      "grade": "2-3Kg",
      "sku": {
        "nature": "fresh",
        "species": "Plaice",
        "type": "handcut filet",
        "variation": "skin off flap off"
      },
      "packing": {
        "id": 42,
        "unit": 2,
        "label": "47.1514Kg",
        "amount": 47.15
      },
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "farmed",
      "fishingAreaCode": null,
      "country": null
    },
    {
      "id": 4,
      "price": 14.34,
      "quantity": 43,
      "quantityLeft": 15,
      "dispatchDate": "2023-09-25T13:30:00Z",
      "createdAt": "2023-09-22T03:14:21Z",
      "expiresAt": "2023-09-23T00:00:00Z",
      "quality": "B",
      "grade": "2-3Kg",
      "sku": {
        "nature": "cooked",
        "species": "Shrimp (black tiger )",
        "type": "under protective atmosphere",
        "variation": "cooked"
      },
      "packing": {
        "id": 40,
        "unit": 2,
        "label": "27.0706Kg",
        "amount": 27.07
      },
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "farmed",
      "fishingAreaCode": null,
      "country": null
    },
    {
      "id": 5,
      "price": 9.5,
      "quantity": 99,
      "quantityLeft": 29,
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
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "dredges",
      "fishingAreaCode": null,
      "country": null
    },
    {
      "id": 2,
      "price": 17.25,
      "quantity": 10,
      "quantityLeft": 0,
      "dispatchDate": "2023-09-25T13:30:00Z",
      "createdAt": "2023-09-22T03:14:20Z",
      "expiresAt": "2023-09-23T00:00:00Z",
      "quality": "A",
      "grade": "2-3Kg",
      "sku": {
        "nature": "alive",
        "species": "Plaice",
        "type": "whole",
        "variation": "gutted"
      },
      "packing": {
        "id": 40,
        "unit": 2,
        "label": "27.0706Kg",
        "amount": 27.07
      },
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "farmed",
      "fishingAreaCode": null,
      "country": null
    },
    {
      "id": 3,
      "price": 17.25,
      "quantity": 51,
      "quantityLeft": 3,
      "dispatchDate": "2023-09-25T13:30:00Z",
      "createdAt": "2023-09-22T03:14:20Z",
      "expiresAt": "2023-09-23T00:00:00Z",
      "quality": "E",
      "grade": "2-3Kg",
      "sku": {
        "nature": "fresh",
        "species": "Cod",
        "type": "machine cut filet",
        "variation": "queue avec peau"
      },
      "packing": {
        "id": 40,
        "unit": 2,
        "label": "27.0706Kg",
        "amount": 27.07
      },
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "farmed",
      "fishingAreaCode": null,
      "country": null
    },
    {
      "id": 1,
      "price": 11.44,
      "quantity": 26,
      "quantityLeft": 16,
      "dispatchDate": "2023-09-25T13:30:00Z",
      "createdAt": "2023-09-22T03:14:19Z",
      "expiresAt": "2023-09-23T00:00:00Z",
      "quality": "E",
      "grade": "2-3Kg",
      "sku": {
        "nature": "fresh",
        "species": "Plaice",
        "type": "handcut filet",
        "variation": "skin off flap off"
      },
      "packing": {
        "id": 7,
        "unit": 2,
        "label": "15 kg",
        "amount": 15.0
      },
      "status": "NOT_ACCEPTED",
      "lastSaleAt": null,
      "fishingMethod": "farmed",
      "fishingAreaCode": null,
      "country": null
    }
  ]
}
