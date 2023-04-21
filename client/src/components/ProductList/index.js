import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_STATS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_STATS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        stats: data.stats,
      });
      data.stats.forEach((stats) => {
        idbPromise('stats', 'put', stats);
      });
    } else if (!loading) {
      idbPromise('stats', 'get').then((stats) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          stats: stats,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterStats() {
    if (!currentCategory) {
      return state.stats;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Fighters:</h2>
      { (
        <div className="flex-row">
          {filterStats().map((stats) => (
            <ProductItem
              key={stats._id}
              _id={stats._id}
              wins={stats.wins}
              losses={stats.losses}
              image={stats.image}
              name={stats.name}
              sigStrikes={stats.sigStrikes}
            />
          ))}
        </div>
      )  (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
