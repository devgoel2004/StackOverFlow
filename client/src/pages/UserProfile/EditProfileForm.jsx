import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/users";
import toast from "react-hot-toast";
import Editor from "../../components/Editor/Editor";
const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags.length === 0 || tags[0] === "") {
      toast.success("Update tags field");
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
      toast.success("Update tags field");
    }
    setSwitch(false);
  };
  return (
    <div>
      <h1 className="edit-profile-title">Edit Your Profile</h1>
      <h2 className="edit-profile-title-2">Public Information</h2>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        className="edit-profile-form"
        onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Display Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About Me</h3>
          <Editor type="text" value={about} onChange={setAbout} />
        </label>
        <label htmlFor="tags">
          <h3>Watched Tags</h3>
          <p>Add tags seperated by 1 space</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Update Profile"
          className="user-submit-btn"
        />
        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
