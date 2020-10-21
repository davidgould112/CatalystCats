import { connect} from 'react-redux';
import { Dispatch } from "redux";
import { removeCat, showForm, editCat, formType } from '../state/actions';
import { Cat } from '../state/types'
import ListItem from '../components/ListItem';


const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeCat: (key: string) => {dispatch(removeCat(key))},
  editCat: (cat: Cat) => {dispatch(editCat(cat))},
  showForm: (bool: boolean) => {dispatch(showForm(bool))},
  setFormType: (typeStr: string) => {dispatch(formType(typeStr))}
})

const ListItemConnected = connect(null, mapDispatchToProps)(ListItem);

export default ListItemConnected;