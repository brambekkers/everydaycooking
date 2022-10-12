# Front-end Assignment

Hello, how nice of you to come and see my recipe app. My name is Bram Bekkers and this is my execution of the MealDB assignment.

I made this app next to my full-time job. I have tried to implement all aspects of my skills in this app. Can I do more? Yes. However, I also tried to build something within a certain amount of time.

I hope you like the application. I am happy to explain my ideas in a personal interview.

## How to run the application

Open terminal and run:

```
- npm install
- npm run dev
```

## Which architecture did I choose

I have chosen a basic starting point and used Vite as a bundler package. The choice of framework is Vue. I deliberately chose to add no extra libraries. For navigation I chose vue-router and for state management I chose Pinia (the cool kid on the block ;) ).

## Folder structure

I have opted for the classic Vue folder structure. The pages can be found in the 'pages' folder, the components in the 'components' folder and the assets in the 'assets' folder. For styling elements I used scss files. I made one main file with separate module files in subfolders. Pinia has several modules in separate files. The index.ts file points to these files. I also created a folder of types for a single Typescript Interface.

## Extra features

- Darkmode
- Favorites recipes
- Storage in localstorage

## What I don't have

I used a linter but didn't use any additional testing libaries. In the past I have programmed a lot by myself and I want/need to develop this skill further.
