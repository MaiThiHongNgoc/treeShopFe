import React, { useState, useEffect } from 'react';
import './TreeFrom.css';

const TreeForm = ({ selectedTree, onSubmit, onReset }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImage] = useState('');

  useEffect(() => {
    if (selectedTree) {
      setName(selectedTree.name);
      setDescription(selectedTree.description);
      setImage(selectedTree.img);
    } else {
      setName('');
      setDescription('');
      setImage('');
    }
  }, [selectedTree]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const treeData = { name, description, img };
    onSubmit(treeData); // Call parent function to handle the submission
  };

  return (
    <form className="tree-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Tree Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter tree name" 
        />
      </div>
       

      <div className="form-group">
        <label>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter description" 
        />
      </div>

      <div className="form-group">
        {img && (
        <img src={img} alt={name} className="tree-image-preview" />
      )}
        <label>Image</label>
        <input 
          type="text" 
          value={img} 
          onChange={(e) => setImage(e.target.value)} 
          placeholder="Enter image URL" 
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="add-btn">
          {selectedTree ? "Update" : "Add"}
        </button>
        <button type="button" className="reset-btn" onClick={onReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default TreeForm;
