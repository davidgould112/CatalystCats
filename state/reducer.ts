import {  CatListState, 
          FormState, 
          CatListAction, 
          FormAction, 
          AddCatAction, 
          RemoveCatAction, 
          UpdateCatAction,
          ShowFormAction,
          FormTypeAction,
          EditCatAction
        } from './types';
import {  ADD_CAT, 
          REMOVE_CAT, 
          UPDATE_CAT, 
          SHOW_FORM,
          FORM_TYPE,
          EDIT_CAT
        } from './actions';

const initialListState: CatListState = [
  {
    name: 'JoJo',
    breed: 'Siamese',
    color: 'Brown',
    key: '0'
  },
  {
    name: 'MoJo',
    breed: 'Tabby',
    color: 'Orange',
    key: '1'
  },
  {
    name: 'FloJo',
    breed: 'Persian',
    color: 'Gray',
    key: '2'
  }
];

export const catListReducer = (
  state: CatListState = initialListState,
  action:CatListAction
) => {
  switch (action.type){
    case ADD_CAT:
      const { catData } = <AddCatAction>action;
      const keyId  = Math.floor(Math.random() * 1000);
      catData.key = keyId.toString();
      console.log("ADD_CAT: ", catData)
      return [catData, ...state];
    case REMOVE_CAT:
      const { key } = <RemoveCatAction>action;
      let catListArr = state.slice();
      const index = catListArr.map(function(obj) { return obj.key; }).indexOf(key);
      catListArr.splice(index, 1)
      console.log("REMOVE_CAT listArr : ", catListArr)
      return [...catListArr]
    case UPDATE_CAT:
      const { updateData } = <UpdateCatAction>action;
      let catArr = state.slice();
      const idx = catArr.map(function(obj) { return obj.key; }).indexOf(updateData.key);
      console.log("UPDATE_CAT: ", updateData)
      catArr[idx] = updateData;
      return [...catArr];
    default:
      return state;
  }
}

const initialFormState: FormState = {
  formVisible: false,
  formType: 'create',
  editCat: {
    name: "eg. Fluffy",
    breed: "Select",
    color: "Select",
    key: "-1"
  }
}

export const formReducer = (
state: FormState = initialFormState,
action: FormAction
) => {
switch (action.type){
  case SHOW_FORM:
    const { bool } = <ShowFormAction>action;
    console.log("SHOW_FORM: ", bool)
    return {
      formVisible: bool,
      formType: state.formType,
      editCat: state.editCat
    };
  case FORM_TYPE:
    const { typeStr } = <FormTypeAction>action;
    console.log("FORM_TYPE: ", typeStr)
    return {
      formVisible: state.formVisible,
      formType: typeStr,
      editCat: state.editCat
    };
  case EDIT_CAT:
    const { cat } = <EditCatAction>action;
    const editCatState =  {
      editCat: cat,
      formVisible: state.formVisible,
      formType: state.formType,
    };
    console.log("EDIT_CAT: ", editCatState);
    return editCatState;
  default:
    return state;
  }
}