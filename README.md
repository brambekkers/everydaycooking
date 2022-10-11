# Front-end Assignment

## How to run the application

Open terminal and run:

```
- npm install
- npm run dev
```

## Which architecture did I choose

I have chosen a basic starting point and used Vite as a bundler package. The choice of framework is Vue. I deliberately chose to add no extra libraries. For navigation I chose vue-router and for state management I chose Pinia (the cool kid on the block ;) ).

## Folder structure

I have opted for the classic vue folder structure. The pages can be found in the 'pages' folder, the components in the 'components' folder and the assets in the 'assets' folder.

For styling elements I used scss files. I made one main file with separate module files in subfolders. Pinia has several modules in separate files. The index.ts file points to these files.

I also created a folder of types for a single Typescript Interface.
