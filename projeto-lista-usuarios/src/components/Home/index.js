import React, { useEffect, useState } from "react";
import axios from "axios";

import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

import SearchBar from "../SearchBar";
import UserTable from "../UserTable";

import "./index.scss"

function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Erro ao buscar usuários:", error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleUserClick = (userId) => {
    setSelectedUserId((prevId) => (prevId === userId ? null : userId));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Botão para mudar o tema
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);


  return (
    <div className="home-container">
      <header>
        <div className="title-theme">
          <h1>Lista de Usuários</h1>
          <button onClick={toggleTheme}>
            {darkMode ? <IoMdSunny /> : <IoMoon />}
          </button>
        </div>
        <SearchBar onSearch={handleSearch} />
      </header>

      <UserTable
        users={filteredUsers}
        onUserClick={handleUserClick}
        selectedUserId={selectedUserId}
      /> 
    </div>
  )
}

export default Home;