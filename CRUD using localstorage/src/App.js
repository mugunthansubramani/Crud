import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Initialize state variables
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    age: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [editingItemId, setEditingItemId] = useState(null);

  // Load data from local storage on component mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(savedItems);
  }, []);

  // Save data to local storage whenever 'items' changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "*Enter Your Name";
    }

    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "*Enter Your Father Name";
    }

    if (!formData.age.trim()) {
      newErrors.age = "*Enter Your Age";
    }

    if (!formData.description.trim()) {
      newErrors.description = "*Enter Your Address";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // If editing, update item; otherwise, add a new item
      if (editingItemId !== null) {
        const updatedItems = items.map((item) =>
          item.id === editingItemId ? { ...item, ...formData } : item
        );
        setItems(updatedItems);
        setEditingItemId(null);
      } else {
        // Generate a unique ID for the new item
        const newItem = { ...formData, id: Date.now() };
        setItems([...items, newItem]);
      }

      // Clear form data
      setFormData({ name: "", fatherName: "", age: "", description: "" });
    }
  };

  // Handle item deletion
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Handle item edit
  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setFormData(itemToEdit);
      setEditingItemId(id);
    }
  };

  return (
    <>
      <div className="row text-center">
        
        <div className="col-lg-6 bg-dark text-white">
          <div className="row mt-4 mb-4 text-center">
            <h1>Voter Id Form</h1>
          </div>
          <div className="row mt-5">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">Name:</div>
                <div className="col-lg-6 ">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-6">Father Name:</div>
                <div className="col-lg-6 ">
                  <input
                    type="text"
                    name="fatherName"
                    placeholder="Enter Father your name"
                    className="form-control"
                    value={formData.fatherName}
                    onChange={(e) =>
                      setFormData({ ...formData, fatherName: e.target.value })
                    }
                  />
                  {errors.fatherName && <p>{errors.fatherName}</p>}
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-6">Age:</div>
                <div className="col-lg-6 ">
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter your Age"
                    min={18}
                    className="form-control"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                  {errors.age && <p>{errors.age}</p>}
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-6">Address:</div>
                <div className="col-lg-6 ">
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Enter your Address"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                  {errors.description && <p>{errors.description}</p>}
                </div>
              </div>

              <div className="row mt-5  mb-5 text-center">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                  <button className="bg-success text-white fw-bold border-0 rounded p-2 " type="submit">
                    {editingItemId !== null ? "Update" : "Submit"}
                  </button>
                </div>
                <div className="col-lg-4">&nbsp;</div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <h1 className="text-center mb-3 mt-3">VOTER ID LIST</h1>
          <table className="table table-dark table-striped">
            <thead>
              <th>Id</th>
              <th>Name</th>
              <th>Father Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Action</th>
            </thead>
            <tbody>
              {items.map((item,index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.fatherName}</td>
                  <td>{item.age}</td>
                  <td>{item.description}</td>
                  <td>
                    <button  className="bg-success text-white fw-bold border-0 rounded p-2" onClick={() => handleEdit(item.id)}>Edit</button>
                    <button  className="bg-danger text-white fw-bold border-0 rounded ms-2 p-2" onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> 
    </>
  );
};

export default App;
