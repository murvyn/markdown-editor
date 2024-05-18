# Markdown Editor

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Create, Read, Update, and Delete markdown documents
- Name and save documents to be accessed as needed
- Edit the markdown of a document and see the formatted preview of the content
- View a full-page preview of the formatted content
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: If you're building a purely front-end project, use localStorage to save the current state in the browser that persists when the browser is refreshed
- **Bonus**: Build this project as a full-stack application

### Screenshot

![light mode](./FireShot/FireShot%20Capture%20001%20-%20Markdown%20Editor%20-%20markdown-editor-ebon-nine.vercel.app.png)

![dark mode](./FireShot/FireShot%20Capture%20002%20-%20Markdown%20Editor%20-%20markdown-editor-ebon-nine.vercel.app.png)

### Links

- Solution URL: [Github](https://github.com/murvyn/markdown-editor.git)
- Live Site URL: [Vercel](https://markdown-editor-ebon-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

During the development of this project, I gained valuable insights and learned several key concepts. Here are some of the major learnings:

1. **React Component Lifecycle**: I deepened my understanding of React's component lifecycle methods and how they influence the behavior of components. For example, I learned how to use `componentDidMount` for initializing state and fetching data from external APIs.

```javascript
class MyComponent extends React.Component {
  componentDidMount() {
    // Code to run after the component mounts
    fetchData();
  }
}
```

2. **State Management with React Hooks**: I explored React Hooks, such as `useState` and `useEffect`, for managing state and side effects within functional components. This allowed me to simplify my code and make it more readable.

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  // Code to run after every render
  document.title = `You clicked ${count} times`;
}, [count]);
```

3. **Responsive Design with CSS**: I improved my skills in creating responsive layouts using CSS media queries. I learned how to design interfaces that adapt to different screen sizes, providing a better user experience across devices.

```css
@media screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}
```

4. **Working with TypeScript**: This project was my first experience using TypeScript with React. I learned how TypeScript enhances code quality by providing static type checking, which helps catch errors early in the development process.

```typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
```

These are just a few examples of the valuable lessons I learned while building this project. I look forward to applying these newfound skills in future projects and continuing to grow as a developer.

### Continued development

While completing this project, I found several areas that I want to continue focusing on in future projects:

1. **Refining the use of React Hooks**: Although I utilized useState and useEffect extensively in this project, I want to deepen my understanding and usage of useRef, useMemo, and useCallback. These hooks can optimize performance and improve code readability in certain scenarios.

2. **Exploring Next.js for server-side rendering**: Next.js offers powerful features for building server-side rendered React applications. I intend to explore Next.js further in my future projects to leverage its benefits, such as improved performance and SEO.

3. **Enhancing UI/UX design skills**: While I implemented basic styling using CSS and Styled Components in this project, I aim to enhance my UI/UX design skills. I plan to learn more about design principles, responsive design, and UI frameworks to create more visually appealing and user-friendly interfaces.

By focusing on these areas, I believe I can further improve my skills as a developer and deliver even better projects in the future.

### Useful resources

- [ChatGPT](https://openai.com/gpt-3) - ChatGPT provided helpful guidance and assistance throughout the development process. Its ability to generate code snippets and answer questions was invaluable.
  
- [YouTube](https://www.youtube.com/) - Various YouTube tutorials and channels provided valuable insights and step-by-step guides on React, TypeScript, and CSS styling techniques. They helped me understand complex concepts and improve my coding skills.

- [Daisy UI](https://daisyui.com/) - Daisy UI provided a collection of utility-first CSS components for building responsive and accessible web interfaces. It streamlined my UI development process and improved the overall design of my project.

- Google - General web searches and documentation on platforms like MDN Web Docs and React's official documentation were instrumental in resolving specific coding issues, understanding new concepts, and finding best practices.

## Author

- Website - [Marvin Asamoah](https://3-d-portfolio-nine-sage.vercel.app/)
- Frontend Mentor - [@murvyn](https://www.frontendmentor.io/profile/murvyn)
- Twitter - [@_murvyn_](https://twitter.com/_murvyn_)
- Linkedin - [Marvin Asamoah](https://www.linkedin.com/in/marvin-asamoah-8ba47517a/)

That's great! Here's how you can structure the "Acknowledgments" section to give credit to those who helped you:

## Acknowledgments

I would like to extend my gratitude to the following individuals for their assistance and support during the development of this project:

- Amalitech NSS 2024/25 - Special thanks to the members of the worker group for their support, troubleshooting assistance, and collaborative efforts.
