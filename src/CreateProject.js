import React from 'react';

function CreateProject() {
  return (
    <div className="create-container">
      <h2>Create New Project</h2>
      {/* هنا نضع النموذج الخاص بك */}
      <input type="text" placeholder="Project Name" />
      <button>Submit</button>
    </div>
  );
}

export default CreateProject;