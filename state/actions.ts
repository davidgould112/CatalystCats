import {  AddCatAction, 
          RemoveCatAction, 
          UpdateCatAction, 
          ShowFormAction, 
          FormTypeAction, 
          EditCatAction, 
          Cat 
        } from "./types"
export const ADD_CAT = 'ADD_CAT';
export const REMOVE_CAT = 'REMOVE_CAT';
export const  UPDATE_CAT = 'UPDATE_CAT'

export const addCat = ( name: string, breed: string, color: string, key: string ): AddCatAction => ({
  type: ADD_CAT,
  catData: {
    name: name,
    breed: breed,
    color: color,
    key: key
  }
});

export const removeCat = ( idx: string ): RemoveCatAction => ({
  type: REMOVE_CAT,
  key: idx
});

export const updateCat = ( cat: Cat ): UpdateCatAction => ({
  type: UPDATE_CAT,
  updateData: cat
});

export const SHOW_FORM = 'SHOW_FORM';
export const FORM_TYPE = 'FORM_TYPE';
export const EDIT_CAT = 'EDIT_CAT'

export const showForm = ( bool: boolean ): ShowFormAction => ({
  type: SHOW_FORM,
  bool: bool
});

export const formType = ( text: string): FormTypeAction => ({
  type: FORM_TYPE,
  typeStr: text
})

export const editCat = (cat: Cat): EditCatAction => ({
  type: EDIT_CAT,
  cat: cat
})