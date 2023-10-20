import { rest } from "msw";
import { home } from "./responses/home";
import { carwashes } from "./responses/carwashes";
import { carwashesDetails } from "./responses/carwashesDetails";
import { revenue } from "./responses/revenue";
import { sales } from "./responses/sales";

export const handlers = [
  // GET
  rest.get("/owner/home", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(home));
  }),

  rest.get("/owner/carwashes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(carwashes));
  }),

  rest.get("/owner/carwashesDetails", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(carwashesDetails));
  }),

  rest.get("owner/sales", (req, res, ctx) => {
    if (req.body) {
      return res(ctx.status(200), ctx.json(sales));
    }
  }),

  rest.get("owner/revenue", (req, res, ctx) => {
    if (req.body) {
      return res(ctx.status(200), ctx.json(revenue));
    }
  }),

  // POST
  rest.post("/owner/login", (req, res, ctx) => {
    if (req.body) {
      return res(ctx.status(200));
    }
  }),

  rest.post("/owner/signup", (req, res, ctx) => {
    if (req.body) {
      return res(ctx.status(200));
    }
  }),

  rest.post("/owner/register", (req, res, ctx) => {
    if (req.body) {
      return res(ctx.status(200));
    }
  }),

  rest.post("/owner/:carwash_id/bays", (req, res, ctx) => {
    if (req.body) {
      return res(ctx.status(200));
    }
  }),

  // PUT

  rest.put("/owner/carwashes/:carwash_id/details", (req, res, ctx) => {
    if (req.body) {
      return res(ctx.status(200));
    }
  }),

  rest.put("owner/bays/:bay_id/status", (req, res, ctx) => {
    if (req.body) {
      return res(ctx.status(200));
    }
  }),

  // DELETE
  rest.delete("/reservations/:reservation_id", (req, res, ctx) => {
    if (req.body) {
      return res(ctx.status(200));
    }
  }),
];
