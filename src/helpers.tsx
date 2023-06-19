export const apiPromise = async (values: any) => {
  await new Promise((r) => setTimeout(r, 500));
  alert(JSON.stringify(values, null, 2));
};
