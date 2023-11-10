import { instance } from "./instance";

export const getCarwashes = async () => {
  return instance.get("/api/owner/carwashes");
};

export const getCarwashesDetails = async (carwash_id) => {
  return instance.get(`/api/owner/carwashes/${carwash_id}/details`);
};

export const putCarwashesDetails = async (carwash_id, data) => {
  return instance.put(`/api/owner/carwashes/${carwash_id}/details`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const register = async (data) => {
  return instance.post("/api/owner/carwashes/register", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const addBays = async (data) => {
  const { carwash_id, bay_number } = data;
  return instance.post(`/api/owner/carwashes/${carwash_id}/bays`, {
    bayNum: bay_number,
  });
};

export const getCarwashItem = async (carwash_id) => {
  return instance.get(`/api/owner/carwashes/${carwash_id}`);
};

export const getCarwashBayReservationHistory = async (bay_id) => {
  return instance.get(`/api/owner/reservation/${bay_id}`);
};

export const cancelReservation = async (reservation_id) => {
  return instance.delete(`/api/user/reservations/${reservation_id}`);
};
