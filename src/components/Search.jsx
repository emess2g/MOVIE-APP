import React from "react";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const locations = [
    { names: "Ashongman Estate", id: 0 },
    { names: "Ashongman Estate", id: 1 },
    { names: "Accra Mall", id: 2 },
    { names: "Agbogba", id: 3 },
    { names: "Awoshie", id: 4 },
    { names: "Bubuashie", id: 5 },
    { names: "East Legon Hills", id: 6 },
    { names: "Ashaley Botwe", id: 7 },
    { names: "Dawhenya", id: 8 },
    { names: "Amasaman", id: 9 },
    { names: "Dzorwulu", id: 10 },
  ];

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = locations.filter((loc) =>
      loc.names.toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };
  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={(e) => handleInputChange(e)}
        className="py-2 rounded outline-none bg-transparent border pl-2"
      />
      <ul className="p-2 bg-[#F5F5F5]">
        {filteredUsers.map((loc) => (
          <li key={loc.id}>
            <p>{loc.names}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
