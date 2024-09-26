import React from 'react';
import './TreeList.css'

const TreeList = ({ trees, onSelectTree, onDeleteTree }) => {
  return (
    <div className="tree-list">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trees.map((tree) => (
            <tr key={tree.id}>
              <td>{tree.id}</td>
              <td>{tree.name}</td>
              <td>
                <img src={tree.img} alt={tree.name} />
              </td>
              <td>{tree.description}</td>
              <td>
                <button onClick={() => onSelectTree(tree)}>✏️</button>
                <button onClick={() => onDeleteTree(tree.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TreeList;
