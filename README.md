# **TodoList React App**

The goal is to implement an application to manage working tasks using React and TypeScript.
# **Folder & File Structure**
We will take a closer look into the folder structure of TodoList.

**public/**

This folder basically keeps the public assets. For example, icon files and other assets which doesn’t come as node packages. All these assets will rest in assest/ folder.

**src/**

You can find all the pages, components, modules etc. here in this folder. This is the main workplace for you to start writing/extending the application source code.

`	`**@todolist/**

Now, here comes the components/ folder where we place common components used throughout the app such as context provider, App Layout, etc.

**Pages/**

Here in this folder, you will find here files contains all the pages components and this index.tsx has all the parent routes defined in it.

**Services/**

Here we made axios mock api service to test and catch fake data

**@fake-db/**

You can find all fake data in json format. So, you can use it for fake server.

**APIs**

I implemented some APIs for add, get and updating task to task list data. All actions such as post, get and update has provided in /tasks URL. It’s implemented in  src/@todolist/components/TodoAction.tsx address.
