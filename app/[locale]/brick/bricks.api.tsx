import http from "@/services/httpService";
import { IBrickProductDetail } from "./brickProduct.interfaces";

export const getBricksList = async () => {
  const res = await http.get("/bricks/bricksList.json").then((res) => {
    return res;
  });

  return res.data;
};

export const getBrickInfo = async (
  path: string,
): Promise<IBrickProductDetail> => {
  const res = await http.get(`/bricks/${path}/info.json`,{params: { time: Date.now() }}).then((res) => {
    return res;
  });

  return res.data as IBrickProductDetail;
};
