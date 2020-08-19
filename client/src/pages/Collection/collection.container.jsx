import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../store/selectors/shop.selectors';
import Spinner from '../../components/Spinner';
import Collection from '.';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  Spinner
)(Collection);

export default CollectionContainer;
