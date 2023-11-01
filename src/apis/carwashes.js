import { instance } from "./instance";

export const getCarwashes = async () => {
  return instance.get("/owner/carwashes");
};

export const getCarwashesDetails = async (carwash_id) => {
  return instance.get(`/owner/carwashes/${carwash_id}/details`);
};

export const putCarwashesDetails = async (carwash_id, data) => {
  return instance.put(`/owner/carwashes/${carwash_id}/details`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const register = async (data) => {
  return instance.post("/owner/carwashes/register", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const addBays = async (data) => {
  const { carwash_id, bay_number } = data;
  return instance.post(`/owner/carwashes/${carwash_id}/bays`, bay_number);
};

export const getCarwashItem = async (carwash_id) => {
  return instance.get(`/owner/carwashes/${carwash_id}`);
};
