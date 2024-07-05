const getData = async (API_URL: string) => {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("не загрузился");
  }
  return res.json();
};

export default getData;
