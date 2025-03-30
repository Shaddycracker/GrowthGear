---

# Gen AI Growth Gear Analytics - Data Query Dashboard  

## Overview  

This project is a **React TypeScript** application designed as a **Data Query Dashboard** for the **Gen AI Analytics tool**. The dashboard enables users to input natural language queries, process them, and visualize results using mock data. The project follows best practices for component structure, state management using **Redux**, and UI implementation using **ShadCN components**.  

## Features  

- **Natural Language Query Input**  
- **Query Processing Simulation**  
- **Query History Management**  
- **Data Visualization with Charts**  
- **State Management with Redux**  
- **ShadCN UI Components for Modern Design**  
- **Routing with React Router**  

## Tech Stack  

- **React** with **TypeScript**  
- **Redux** for state management  
- **React Router** for navigation  
- **ShadCN UI** for UI components  
- **Tailwind CSS** for styling  
- **Chart.js / Recharts** for data visualization  

## Folder Structure  

```
src/  
│── components/            # All UI and reusable components  
│   ├── ui/                # ShadCN UI components  
│   ├── QueryInput.tsx     # Input field with AI suggestions  
│   ├── QueryHistory.tsx   # Displays previous queries  
│   ├── ResultDisplay.tsx  # Shows query results with charts
|   |.... more....
│── hooks/                 # Custom hooks for state management  
│   ├── useQuery.ts        # Handles query input and processing  
│── store/                 # Redux store setup  
│   ├── index.ts           # Root store configuration  
│   ├── querySlice.ts (main)  # Reducer and actions for queries
|-- lib/
|   |- mockData
|   |- utils
│── App.tsx                # Defines all routes  
│── main.tsx               # Entry point  
│── index.css              # Global styles  
```

## Installation & Setup  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/Shaddycracker/GrowthGear
   cd project-folder
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Run the project**  
   ```sh
   npm run dev
   ```

## Deployment  

The project is hosted on **Vercel**. You can access the live version here:  
[[Vercel Deployment Link]  ](https://growth-gear-navy.vercel.app/)

## Approach  

- Implemented **Redux Toolkit** for efficient state management.  
- Used **ShadCN UI components** for a clean, modern interface.  
- Managed routes using **React Router** to navigate between pages.  
- Ensured **responsive design** with Tailwind CSS.  

## Future Enhancements  

- Implementing real-time query processing with an API  
- Adding authentication for user sessions  
- Improving AI-based query suggestions  

## Contact  

For any queries or improvements, feel free to connect.  

Best,  
Shadab Ali
