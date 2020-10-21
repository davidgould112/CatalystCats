
export type Cat = {
  name: string;
  breed: string;
  color: string;
  key: string;
}

// state types

export type CatListState = Cat[];

export type FormState = {
  formVisible: boolean;
  formType: string;
  editCat: Cat;
}

export type AppState = {
  list: CatListState;
  form: FormState;
}

// action types

export type AddCatAction = {
  type: string;
  catData: Cat;
}
export type UpdateCatAction = {
  type: string;
  updateData: Cat;
}
export type RemoveCatAction = {
  type: string;
  key: string;
}
export type UpdateFieldAction = {
  type: string;
  text: string;
}

export type ShowFormAction = {
  type: string;
  bool: boolean;
}
export type FormTypeAction = {
  type: string;
  typeStr: string;
}
export type EditCatAction = {
  type: string;
  cat: Cat;
}

export type CatListAction = AddCatAction | UpdateCatAction | RemoveCatAction;

export type FormAction = ShowFormAction | FormTypeAction | EditCatAction;






