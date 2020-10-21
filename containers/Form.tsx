import { connect} from 'react-redux';
import { Dispatch } from "redux";
import { addCat, showForm, updateCat } from '../state/actions';
import { AppState, Cat} from '../state/types';
import Form from '../components/Form';

const mapStateToProps = (state: AppState) => ({
  formType: state.form.formType,
  editCat: state.form.editCat,
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  submit: (name: string, breed: string, color: string, key: string) => {dispatch(addCat(name, breed, color, key))},
  hideForm: () => {dispatch(showForm(false))},
  updateCat: (updateData: Cat) => {dispatch(updateCat((updateData)))}
})

const FormConnected = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormConnected;