export const checkSetterGetter = (obj, key, value) => {
  const spySet = jest.spyOn(obj, key, "set");
  const spyGet = jest.spyOn(obj, key, "get");
  obj[key] = value;
  expect(spySet).toHaveBeenCalled();
  expect(obj["_" + key]).toBe(value);
  const got = obj[key];
  expect(spyGet).toHaveBeenCalled();
  expect(got).toBe(value);
  spySet.mockRestore();
  spyGet.mockRestore();
};

export const spyAndMock = (obj, method, implementation) =>
  jest.spyOn(obj, method).mockImplementation(implementation);
