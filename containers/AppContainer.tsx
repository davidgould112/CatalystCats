import { connect} from 'react-redux';
import { Dispatch } from "redux";
import { showForm, formType } from '../state/actions';
import { AppState } from '../state/types'
import AppContainer from '../components/AppContainer';

const mapStateToProps = (state: AppState) => ({
  formVisible: state.form.formVisible
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  showForm: (bool: boolean) => {dispatch(showForm(bool));},
  setFormType: (typeStr: string) => {dispatch(formType(typeStr))}
})

const AppContainerConnected = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppContainerConnected;