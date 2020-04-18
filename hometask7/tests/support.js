export const checkGetter = (obj, key, value) => {
    obj[key] = value;
    const spy = jest.spyOn(obj, key, "get");
    const got = obj[key];
    expect(spy).toHaveBeenCalled();
    expect(got).toBe(value);
    spy.mockRestore();
  };
  
  export const checkSetter = (obj, key, value) => {
    const spy = jest.spyOn(obj, key, "set");
    obj[key] = value;
    expect(spy).toHaveBeenCalled();
    expect(obj["_" + key]).toBe(value);
    spy.mockRestore();
  };
  