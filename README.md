# React Progress Bar Component

A customizable progress bar component for React.


## [Demo](https://codesandbox.io/s/react-progress-bar-with-section-d56nf8)

## Installation

You can install this package using npm or yarn:

```bash
npm install react-progress-bar-with-section
# or
yarn add react-progress-bar-with-section
```

## Usage


```sh
import React, { useState } from "react";
import { ProgressBar } from "react-progress-bar-with-section";

import "./styles.css";

const App = () => {
  const [currentSection, setCurrentSection] = useState<number>(1);

  const handleCurrentSectionChange = (section: number) => {
    setCurrentSection(section);
  };

  const onSubmit = () => {
    console.log("Click finish button");
  };

  return (
    <div className="App">
      <h1>React Progress Bar With Section</h1>
      <ProgressBar
        currentSection={currentSection}
        totalSections={5}
        finalAction={() => onSubmit()}
        onCurrentSectionChange={handleCurrentSectionChange}
      >
        {currentSection === 1 && (
          <section>
            <h1>Section 1</h1>
          </section>
        )}
        {currentSection === 2 && (
          <section>
            <h1>Section 2</h1>
          </section>
        )}
        {currentSection === 3 && (
          <section>
            <h1>Section 3</h1>
          </section>
        )}
        {currentSection === 4 && (
          <section>
            <h1>Section 4</h1>
          </section>
        )}
        {currentSection === 5 && (
          <section>
            <h1>Section 5</h1>
          </section>
        )}
      </ProgressBar>
    </div>
  );
};
export default App;

```

## CSS

```sh
.common-progress {
  width: 100%;
  max-width: 600px;
  height: 22px;
  margin: auto;
  background-color: #e9e9e9;
}

.common-progress-bar {
  content: "";
  display: block;
  height: 100%;
  background-color: #045eb3;
  width: 0;
  transition: width 0.5s ease-in-out;
}
```

## Props

The `Calendar` component accepts the following props:

```jsx

| Prop                  | Type           | Default  | Description                                                                                              |
| --------------------- | ---------------| -------- | -------------------------------------------------------------------------------------------------------- |
| `currentSection`      | number         | `1`      | The current section of the progress bar.                                                                |
| `totalSections`       | number         | `3`      | The total number of sections in the progress bar.                                                        |
| `finalAction`         | function       |          | A callback function to be called when the final action button is clicked (e.g., Finish button).        |
| `onCurrentSectionChange` | function    |          | A callback function called when the current section changes.                                              |
| `nextBtnDisabled`     | boolean        | `false`  | If `true`, disables the Next button.                                                                     |
| `backBtnDisabled`     | boolean        | `false`  | If `true`, disables the Back button.                                                                     |
| `addClass`            | string         |          | Additional CSS classes to apply to the progress bar container.                                            |
| `backClass`           | string         |          | Additional CSS classes to apply to the Back button.                                                       |
| `nextClass`           | string         |          | Additional CSS classes to apply to the Next button.                                                       |
| `actionClass`         | string         |          | Additional CSS classes to apply to the Final Action (Finish) button.                                       |
| `commonBtnClass`      | string         |          | Additional CSS classes to apply to all buttons (Back, Next, Finish).                                      |
| `backName`            | string         | `'Back'` | The text label for the Back button.                                                                      |
| `nextName`            | string         | `'Next'` | The text label for the Next button.                                                                      |
| `actionName`          | string         | `'Finish'` | The text label for the Final Action (Finish) button.                                                      |
| `children`            | React.ReactNode|          | Content to be displayed inside the progress bar component.                                                 |

```