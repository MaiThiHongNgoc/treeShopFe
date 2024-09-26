import React, { useState, useEffect } from 'react';
import './App.css';
import TreeList from './components/TreeList';
import TreeForm from './components/TreeForm';
import { getAllTrees, createTree, updateTree, deleteTree } from './services/TreeService';

function App() {
  const [trees, setTrees] = useState([]);
  const [selectedTree, setSelectedTree] = useState(null);

  useEffect(() => {
    loadTrees();
  }, []);

  const loadTrees = async () => {
    try {
      const response = await getAllTrees();
      setTrees(response.data);
    } catch (error) {
      console.error("Error loading trees:", error);
    }
  };

  const handleAddOrUpdateTree = async (treeData) => {
    try {
      if (selectedTree) {
        await updateTree(selectedTree.id, treeData);
      } else {
        await createTree(treeData);
      }
      loadTrees();
      setSelectedTree(null); // Clear form after adding/updating
    } catch (error) {
      console.error("Error saving tree:", error);
    }
  };

  const handleDeleteTree = async (id) => {
    try {
      await deleteTree(id);
      loadTrees();
    } catch (error) {
      console.error("Error deleting tree:", error);
    }
  };

  const handleSelectTree = (tree) => {
    setSelectedTree(tree);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Tree Shop</h1>
      </header>

      <div className="tree-container">
        <TreeForm 
          selectedTree={selectedTree} 
          onSubmit={handleAddOrUpdateTree}
          onReset={() => setSelectedTree(null)}
        />
        <TreeList 
          trees={trees} 
          onSelectTree={handleSelectTree} 
          onDeleteTree={handleDeleteTree} 
        />
      </div>

      <footer className="app-footer">
        Số 8, Tôn Thất Thuyết, Cầu giấy, Hà Nội
      </footer>
    </div>
  );
}

export default App;
