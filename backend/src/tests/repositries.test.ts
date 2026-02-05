import { connect } from "node:http2";
import {
  getDataRep,
  postDataRep,
  putDataRep,
  deleteDataRep,
} from "../repositories/repository";

const connection = {
  query: jest.fn(),
};

jest.mock("pg", () => {
  return {
    Pool: jest.fn(() => {
      return {
        connect: jest.fn(() => connection),
      };
    }),
  };
});

describe("testGet", () => {
  test("1", async () => {
    connection.query.mockResolvedValue({
      rows: [{ title: "", description: "", completed: true, createdAt: "" }],
    });
    const res = await getDataRep();
    expect(connection.query).toHaveBeenCalled();
    expect(res).toEqual([
      { title: "", description: "", completed: true, createdAt: "" },
    ]);
  });
});
describe("testPost", () => {
  test("1", async () => {
    connection.query.mockResolvedValue({
      rows: [{ title: "", description: "", completed: true, createdAt: "" }],
    });
    const res = await postDataRep("", "", true, "");
    expect(connection.query).toHaveBeenCalled();
    expect(res).toEqual([
      { title: "", description: "", completed: true, createdAt: "" },
    ]);
  });
});
describe("testPut", () => {
  test("1", async () => {
    connection.query.mockResolvedValue({
      rows: [{ title: "", description: "", completed: true, createdAt: "" }],
    });
    const res = await putDataRep(1, "", "", true, "");
    expect(connection.query).toHaveBeenCalled();
    expect(res).toEqual([
      { title: "", description: "", completed: true, createdAt: "" },
    ]);
  });
});
describe("testDelete", () => {
  test("1", async () => {
    connection.query.mockResolvedValue({
      rows: [
        { id: 1, title: "", description: "", completed: true, createdAt: "" },
      ],
    });
    const res = await deleteDataRep(1);
    expect(connection.query).toHaveBeenCalled();
    expect(res).toEqual([
      { id: 1, title: "", description: "", completed: true, createdAt: "" },
    ]);
  });
});
