import React from 'react';
import { useSearchParams } from 'react-router-dom';

const CommentSortFilter = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const setSortBy = (sort_by) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('sort_by', sort_by)
        setSearchParams(newParams)
    }

    const handleSortByChange = (event) => {
        event.preventDefault();
        setSortBy(JSON.parse(event.target.value));
      };

    return (
        <form>
        <label htmlFor="select-sort-by" className="select-sort-by">
          Sort Comments By:{" "}
        </label>
        <select
          id="select-sort-by"
          className="select-sort-by"
          onChange={handleSortByChange}
        >
          <option value={""}>
            Select Sort By
          </option>
          <option value={JSON.stringify("created_at")} key={"created_at"}>
            Date
          </option>
          <option value={JSON.stringify("votes")} key={"votes"}>
            Votes
          </option>
        </select>
      </form>
    );
};

export default CommentSortFilter;