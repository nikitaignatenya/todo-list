import { getData, postData, putData, deleteData } from "../services/service";
import * as repositories from "../repositories/repository";

describe("getData", () => {
  test("getTest: 1", async () => {
    const mock = jest.spyOn(repositories, "getDataRep");
    mock.mockResolvedValue([
      {
        id: 1,
        title: "Завершить проект API",
        description:
          "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        completed: true,
        createdat: "2024-01-25T11:30:00.000Z",
      },
    ]);
    const res = await getData();
    expect(mock).toHaveBeenCalled();
    expect(res).toEqual([
      {
        id: 1,
        title: "Завершить проект API",
        description:
          "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        completed: true,
        createdat: "2024-01-25T11:30:00.000Z",
      },
    ]);
  });
  test("getTest: 2", async () => {
    const mock = jest.spyOn(repositories, "getDataRep");
    mock.mockResolvedValue([]);

    try {
      await getData();
    } catch (err: any) {
      expect(mock).toHaveBeenCalled();
      expect(err.message).toBe("NOT FOUND");
    }
  });
});

describe("postDataTest", () => {
  test("postTest: 1", async () => {
    const mock = jest.spyOn(repositories, "postDataRep");
    mock.mockResolvedValue([
      {
        id: 1,
        title: "Завершить проект API",
        description:
          "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        completed: true,
        createdat: "2024-01-25T11:30:00.000Z",
      },
    ]);
    const res = await postData(
      "Завершить проект API",
      "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
      true,
      "2022-03-21T14:20:00.000Z",
    );
    expect(mock).toHaveBeenCalled();
    expect(res).toEqual([
      {
        id: 1,
        title: "Завершить проект API",
        description:
          "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        completed: true,
        createdat: "2024-01-25T11:30:00.000Z",
      },
    ]);
  });
  test("postTest: 2", async () => {
    const mock = jest.spyOn(repositories, "postDataRep");
    mock.mockResolvedValue([]);

    try {
      await postData(
        "Завершить проект API",
        "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        true,
        "2022-03-21T14:20:00.000Z",
      );
    } catch (err: any) {
      expect(mock).toHaveBeenCalled();
      expect(err.message).toBe("Сreation error");
    }
  });
});

describe("putDataTest", () => {
  test("putTest: 1", async () => {
    const mock = jest.spyOn(repositories, "putDataRep");
    mock.mockResolvedValue([
      {
        id: 1,
        title: "Завершить проект API",
        description:
          "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        completed: true,
        createdat: "2024-01-25T11:30:00.000Z",
      },
    ]);
    const res = await putData(
      2,
      "Завершить проект API",
      "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
      true,
      "2022-03-21T14:20:00.000Z",
    );
    expect(mock).toHaveBeenCalled();
    expect(res).toEqual([
      {
        id: 1,
        title: "Завершить проект API",
        description:
          "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        completed: true,
        createdat: "2024-01-25T11:30:00.000Z",
      },
    ]);
  });
  test("putTest: 2", async () => {
    const mock = jest.spyOn(repositories, "putDataRep");
    mock.mockResolvedValue([]);

    try {
      await putData(
        2,
        "Завершить проект API",
        "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        true,
        "2022-03-21T14:20:00.000Z",
      );
    } catch (err: any) {
      expect(mock).toHaveBeenCalled();
      expect(err.message).toBe("Id not found");
    }
  });
});

describe("deleteDataTest", () => {
  test("deleteTest: 1", async () => {
    const mock = jest.spyOn(repositories, "deleteDataRep");
    mock.mockResolvedValue([
      {
        id: 2,
        title: "Завершить проект API",
        description:
          "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        completed: true,
        createdat: "2024-01-25T11:30:00.000Z",
      },
    ]);
    const res = await deleteData(1);
    expect(mock).toHaveBeenCalled();
    expect(res).toEqual([
      {
        id: 2,
        title: "Завершить проект API",
        description:
          "Разработать REST API для управления задачами с использованием Node.js и PostgreSQL",
        completed: true,
        createdat: "2024-01-25T11:30:00.000Z",
      },
    ]);
  });
  test("deleteTest: 2", async () => {
    const mock = jest.spyOn(repositories, "deleteDataRep");
    mock.mockResolvedValue([]);

    try {
      await deleteData(2);
    } catch (err: any) {
      expect(mock).toHaveBeenCalled();
      expect(err.message).toBe("Id does't exist");
    }
  });
});
