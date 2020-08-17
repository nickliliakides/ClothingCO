import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../store/selectors/shop.selectors';
import Spinner from '../../components/Spinner';
import CollectionsOverview from '.';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
