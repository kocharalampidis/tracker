const Filter = () => {
  return (
    <>
      <div className="form-control w-1/12 max-w-xs">
        <label className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
        </label>
        <select className="select select-bordered">
          <option disabled selected>
            Pick one
          </option>
          <option>1 Day</option>
          <option>3 Days</option>
          <option>1 Week</option>
          <option>1 Month</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
