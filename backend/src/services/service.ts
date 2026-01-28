import {
  getDataRep,
  postDataRep,
  putDataRep,
  deleteDataRep,
} from "../repositories/repository";
import { iTask } from "../interfacies/interface";

async function getData() {
  return await getDataRep();
}
async function postData(
  title: string,
  description: string,
  completed: string,
  createdAt: any,
): Promise<iTask[]> {
  return await postDataRep(title, description, completed, createdAt);
}
async function putData(
  id: number,
  title: string,
  description: string,
  completed: string,
  createdAt: string,
): Promise<iTask[]> {
  return await putDataRep(id, title, description, completed, createdAt);
}
async function deleteData(id: number): Promise<iTask[]> {
  return await deleteDataRep(id);
}

export { getData, postData, putData, deleteData };
