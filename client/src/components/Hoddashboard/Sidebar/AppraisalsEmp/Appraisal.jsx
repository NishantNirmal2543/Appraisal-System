// import React from 'react'

// const Appraisal = () => {
//   return (
//     <div>Appraisal</div>
//   )
// }

// export default Appraisal

import React, { useState } from 'react';

// Define your components
const Home = ({ goToComponent }) => (
  <div>
    <h1>Home</h1>
   
                    <u><b>5. Course file and Remedial classes assessment : </b></u>
                    <p>(Max marks : 30)</p>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Grade</th>
                                    <th>Score (Internal Feedback)</th>
                                    <th>Score (External Feedback)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A+ (90 & above)</td>
                                    <td>10</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>A (81 to 89)</td>
                                    <td>8</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>B+ (71 to 80)</td>
                                    <td>6</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>B (61 to 70)</td>
                                    <td>4</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>C  (less than 60)</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
    <button onClick={() => goToComponent('About')}>Go to About</button>
  </div>
);

const About = ({ goBack }) => (
  <div>
    <h1>About</h1>
    <button onClick={goBack}>Go Back</button>
  </div>
);

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('Home');

  // Function to handle component navigation
  const goToComponent = (componentName) => {
    setCurrentComponent(componentName);
  };

  // Function to go back to the previous component
  const goBack = () => {
    setCurrentComponent('Home');
  };

  // Render the current component based on the state
  let component;
  if (currentComponent === 'Home') {
    component = <Home goToComponent={goToComponent} />;
  } else if (currentComponent === 'About') {
    component = <About goBack={goBack} />;
  }

  return <div>{component}</div>;
};

export default App;
