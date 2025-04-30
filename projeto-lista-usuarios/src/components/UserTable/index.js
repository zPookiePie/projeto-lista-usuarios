import React from "react";
import { IoMdPerson } from "react-icons/io";

import "./index.scss"

function UserTable({ users, onUserClick, selectedUserId }) {

    if (users.length === 0) {
        return <p>Nenhum usuário encontrado.</p>;
    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr className="table-title">
                        <th >Nome</th>
                        <th >Email</th>
                        <th >Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <>
                    <tr
                        key={user.id}
                        onClick={() => onUserClick(user.id)}
                    >
                        <td>
                            <span>
                                <IoMdPerson className="user-icon" /> {user.name}
                            </span>
                        </td>
                        <td> {user.email} </td>
                        <td> {user.phone} </td>
                    </tr>

                    {selectedUserId === user.id && (
                        <tr key={`details-${user.id}`}>
                            <td colSpan={3}>
                                <div>
                                    <p><strong>Username:</strong> {user.username}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Telefone:</strong> {user.phone}</p>
                                    <p><strong>Website:</strong> {user.website}</p>
                                    <p><strong>Empresa:</strong> {user.company?.name}</p>
                                    <p><strong>Endereço:</strong> {user.address?.street}, {user.address?.city}</p>
                                </div>
                            </td>
                        </tr>
                        )}
                    </>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;