import { test, expect } from '@playwright/test';

test('modify response for products', async ({ page }) => {
    const testData={
        "data": [
          {
            "id": "prod_RqEv5xLJd5Zz4j",
            "created": 1588262453,
            "updated": 1594409610,
            "active": true,
            "permalink": "lip-fantastic",
            "name": "Lip Fantastic",
            "description": "<p>A limited-edition, nourishing lip gel to top off your look and feel fantastic.</p>",
            "price": {
              "raw": 24,
              "formatted": "24.00",
              "formatted_with_symbol": "$24.00",
              "formatted_with_code": "24.00 USD"
            },
            "inventory": {
              "managed": false,
              "available": 0
            },
            "sku": null,
            "sort_order": 0,
            "seo": {
              "title": null,
              "description": null
            },
            "thank_you_url": null,
            "meta": null,
            "conditionals": {
              "is_active": true,
              "is_tax_exempt": false,
              "is_pay_what_you_want": false,
              "is_inventory_managed": false,
              "is_sold_out": false,
              "has_digital_delivery": false,
              "has_physical_delivery": true,
              "has_images": true,
              "collects_fullname": false,
              "collects_shipping_address": true,
              "collects_billing_address": false,
              "has_video": false,
              "has_rich_embed": false,
              "is_free": false,
              "collects_extrafields": false
            },
            "is": {
              "active": true,
              "tax_exempt": false,
              "pay_what_you_want": false,
              "inventory_managed": false,
              "sold_out": false,
              "free": false
            },
            "has": {
              "digital_delivery": false,
              "physical_delivery": true,
              "images": true
            },
            "collects": {
              "fullname": false,
              "shipping_address": true,
              "billing_address": false,
              "extrafields": false
            },
            "checkout_url": {
              "checkout": "https://checkout.chec.io/lip-fantastic?checkout=true",
              "display": "https://checkout.chec.io/lip-fantastic"
            },
            "media": {
              "type": "image",
              "source": "https://cdn.chec.io/merchants/17851/images/cdae2365eff5a961dd838b0505a1142b656efdf95f08c2785b59a|lips.jpg",
              "asset_id": "ast_VPvL5zNBO5AQkX"
            },
            "categories": [
              {
                "id": "cat_xA12JwrK8oPjnk",
                "slug": "facial-products",
                "name": "Facial Products"
              }
            ],
            "image": {
              "id": "ast_VPvL5zNBO5AQkX",
              "url": "https://cdn.chec.io/merchants/17851/images/cdae2365eff5a961dd838b0505a1142b656efdf95f08c2785b59a|lips.jpg",
              "description": null,
              "is_image": true,
              "filename": "",
              "file_size": 1372960,
              "file_extension": "",
              "image_dimensions": {
                "width": 2400,
                "height": 3596
              },
              "meta": [],
              "created_at": 1594409605,
              "updated_at": 1605921902
            },
            "variant_groups": [
              {
                "id": "vgrp_DWy4oGjWnw6Jx2",
                "name": "Size",
                "meta": null,
                "created": null,
                "updated": null,
                "options": [
                  {
                    "id": "optn_Kvg9l6aKm51bB7",
                    "name": "30ml",
                    "price": {
                      "raw": 0,
                      "formatted": "0.00",
                      "formatted_with_symbol": "$0.00",
                      "formatted_with_code": "0.00 USD"
                    },
                    "assets": [],
                    "meta": null,
                    "created": null,
                    "updated": null,
                    "quantity": 0,
                    "is": {
                      "quantity_limited": false
                    }
                  },
                  {
                    "id": "optn_NqKE50m0BldgBL",
                    "name": "50ml",
                    "price": {
                      "raw": 35,
                      "formatted": "35.00",
                      "formatted_with_symbol": "$35.00",
                      "formatted_with_code": "35.00 USD"
                    },
                    "assets": [],
                    "meta": null,
                    "created": null,
                    "updated": null,
                    "quantity": 0,
                    "is": {
                      "quantity_limited": false
                    }
                  }
                ]
              }
            ],
            "assets": [
              {
                "id": "ast_VPvL5zNBO5AQkX",
                "url": "https://cdn.chec.io/merchants/17851/images/cdae2365eff5a961dd838b0505a1142b656efdf95f08c2785b59a|lips.jpg",
                "description": null,
                "is_image": true,
                "filename": "",
                "file_size": 1372960,
                "file_extension": "",
                "image_dimensions": {
                  "width": 2400,
                  "height": 3596
                },
                "meta": [],
                "created_at": 1594409605,
                "updated_at": 1605921902
              },
              {
                "id": "ast_p6dP5gn4Ron7kA",
                "url": "https://cdn.chec.io/merchants/17851/assets/JKQvBFAbqXZZPjeD|lips-2.jpg",
                "description": null,
                "is_image": true,
                "filename": "",
                "file_size": 1181305,
                "file_extension": "jpeg",
                "image_dimensions": {
                  "width": 2400,
                  "height": 3596
                },
                "meta": [],
                "created_at": 1594413352,
                "updated_at": 1605921897
              },
              {
                "id": "ast_4WJvlKZ4J5bYV1",
                "url": "https://cdn.chec.io/merchants/17851/assets/DYFDwTnwZlJizFuc|lips-3.jpg",
                "description": null,
                "is_image": true,
                "filename": "",
                "file_size": 1541041,
                "file_extension": "jpeg",
                "image_dimensions": {
                  "width": 2400,
                  "height": 3597
                },
                "meta": [],
                "created_at": 1594422063,
                "updated_at": 1605921889
              },
              {
                "id": "ast_VPvL5zNBO5AQkX",
                "url": "https://cdn.chec.io/merchants/17851/images/cdae2365eff5a961dd838b0505a1142b656efdf95f08c2785b59a|lips.jpg",
                "description": null,
                "is_image": true,
                "filename": "",
                "file_size": 1372960,
                "file_extension": "",
                "image_dimensions": {
                  "width": 2400,
                  "height": 3596
                },
                "meta": [],
                "created_at": 1594409605,
                "updated_at": 1605921902
              }
            ],
            "attributes": [],
            "related_products": [],
            "extrafields": []
          }
        ],
        "meta": {
          "pagination": {
            "total": 1,
            "count": 1,
            "per_page": 20,
            "current_page": 1,
            "total_pages": 1,
            "links": {}
          }
        }
      }
    await page.route('https://api.chec.io/v1/products', route => route.fulfill({
        status: 200,
        body: JSON.stringify(testData),
      }));

  await page.goto('https://commercejs-demo-store.netlify.app/');
  const elementLength = await page.locator('div[class="mb-3"]').count();
  expect(elementLength).toEqual(1);
});

test('block requests for categories', async ({ page }) => {
    await page.route('**/v1/categories', route => route.abort());
    await page.goto('https://commercejs-demo-store.netlify.app/');
    expect(await page.locator('div[class="mb-4 w-100 collection-item-image"]').count()).toEqual(0);

  });

test('modifying requests for cart', async ({ page }) => {
    await page.route('**/v1/categories', route => {
        route.continue({url:'https://api.chec.io/v1/products'});
      });
    await page.goto('https://commercejs-demo-store.netlify.app/');
    expect(await page.locator('div[class="mb-4 w-100 collection-item-image"]').count()).toEqual(0);
  });
  