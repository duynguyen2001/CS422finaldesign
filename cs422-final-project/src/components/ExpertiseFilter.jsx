import React, { useState } from 'react';

function ExpertiseFilter() {
    const [expertise, setExpertise] = useState({
      frontend: false,
      backend: false,
      fullstack: false,
      database: false,
      devops: false,
    });
    
    const handleToggleExpertise = (event) => {
      const { name, checked } = event.target;
      setExpertise((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    };
    
    return (
      <div>
        <h2>Expertise</h2>
        <ul>
          <li>
            <label>
              <input type="checkbox" name="frontend" checked={expertise.frontend} onChange={handleToggleExpertise} />
              Frontend Development
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="backend" checked={expertise.backend} onChange={handleToggleExpertise} />
              Backend Development
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="fullstack" checked={expertise.fullstack} onChange={handleToggleExpertise} />
              Full-stack Development
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="database" checked={expertise.database} onChange={handleToggleExpertise} />
              Database Administration
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="devops" checked={expertise.devops} onChange={handleToggleExpertise} />
              DevOps
            </label>
          </li>
        </ul>
      </div>
    );
  }

  export default ExpertiseFilter;