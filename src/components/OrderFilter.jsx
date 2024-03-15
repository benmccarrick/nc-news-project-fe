import React from 'react';
import { useSearchParams } from 'react-router-dom';

const OrderFilter = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const setSortOrder = (order) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("order_by", order);
        setSearchParams(newParams);
      };

    const handleOrderByChange = (event) => {
        event.preventDefault();
        setSortOrder(JSON.parse(event.target.value));
      };

    return (
        <form>
        <label htmlFor="select-order-by" className="select-order-by">
          Order Articles By:{" "}
        </label>
        <select
          id="select-order-by"
          className="select-order-by"
          onChange={handleOrderByChange}
        >
          <option value={""}>
            Select Order By
          </option>
          <option value={JSON.stringify("ASC")} key={"ASC"}>
            Ascending
          </option>
          <option value={JSON.stringify("DESC")} key={"DESC"}>
            Descending
          </option>
        </select>
      </form>
    );
};

export default OrderFilter;