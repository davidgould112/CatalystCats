import { connect} from 'react-redux';
import CatList from '../components/List';
import { AppState } from '../state/types'

const mapStateToProps = (state: AppState) => ({
  catList: state.list
})

const ListConnected = connect(mapStateToProps, null)(CatList);

export default ListConnected;