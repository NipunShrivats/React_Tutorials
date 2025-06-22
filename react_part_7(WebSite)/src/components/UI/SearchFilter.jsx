import React, { useCallback } from "react";
import continentList from "../../api/continentList.json";

export default function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  // countries,
  setCountries,
}) {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = useCallback(
    (value) => {
      setCountries((prevCountries) => {
        const sortedCountries = [...prevCountries].sort((a, b) => {
          return value === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common);
        });
        return sortedCountries;
      });
    },
    [setCountries]
  );
  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />

      <div className="ascDes_btn">
        <button onClick={() => sortCountries("asc")}>A-Z</button>
        <button onClick={() => sortCountries("des")}>Z-A</button>
      </div>
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="All">All</option>
          {continentList.map((curData) => {
            const { id, name, countries } = curData;
            return (
              <option value={name} key={id}>
                {name} ({countries} countries)
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}
