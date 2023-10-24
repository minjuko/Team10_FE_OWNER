import { instance } from "./instance";

export const getCarwashes = () => {
  return instance.get("/owner/carwashes");
};

export const getCarwashesDetails = (carwash_id) => {
  return instance.get(`/owner/carwashes/${carwash_id}/details`);
};

export const putCarwashesDetails = (carwash_id, data) => {
  return instance.put(`/owner/carwashes/${carwash_id}/details`, data);
};

export const postRegister = (data) => {
  return instance.post("/owner/carwashes/register", data);
};

export const addBays = (carwash_id, bay_number) => {
  return instance.post(`/owner/carwashes/${carwash_id}}/bays`, bay_number);
};

export const getCarwashItem = (carwash_id) => {
  return instance.get(`/owner/carwashes/${carwash_id}`);
};
