import http from "@/services/httpService";

export const getBricksList = async () => {
  const res = await http.get("/bricks/bricksList.json").then((res) => {
    return res;
  });

  return res.data;
};

export const getBrickInfo = async (path: string) => {
  const res = await http.get(`/bricks/${path}/info.json`).then((res) => {
    return res;
  });

  return res.data;
};
