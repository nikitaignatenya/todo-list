import {
  getDataRep,
  postDataRep,
  putDataRep,
  deleteDataRep,
} from "../repositories/repository";
import { iTask } from "../interfacies/interface";

async function getData() {
  const res: iTask[] = await getDataRep();
  if (!res.length) throw new Error("NOT FOUND");
  return res;
}
async function postData(
  title: string,
  description: string,
  completed: boolean,
  createdAt: any,
): Promise<iTask[]> {
  const res: iTask[] = await postDataRep(
    title,
    description,
    completed,
    createdAt,
  );
  if (!res.length) throw new Error("Сreation error");
  return res;
}

async function putData(
  id: number,
  title: string,
  description: string,
  completed: boolean,
  createdAt: string,
): Promise<iTask[]> {
  const res: iTask[] = await putDataRep(
    id,
    title,
    description,
    completed,
    createdAt,
  );
  if (!res.length) throw new Error("Id not found");
  return res;
}
async function deleteData(id: number): Promise<iTask[]> {
  const res: iTask[] = await deleteDataRep(id);
  if (!res.length) throw new Error("Id does't exist");
  return res;
}

export { getData, postData, putData, deleteData };
