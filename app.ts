// app.ts
import * as fs from 'fs';
import { Person } from './interfaces';

// Function to read the JSON file
const loadData = (): Person[] => {
  const data = fs.readFileSync('data.json', 'utf-8');
  return JSON.parse(data);
};

// Function to display all data
const displayAllData = (data: Person[]): void => {
  console.log('Displaying all data:');
  data.forEach(person => {
    console.log(`Name: ${person.name}`);
    console.log(`Description: ${person.description}`);
    console.log(`Dog Name: ${person.dog.name}`);
    console.log(`Dog Age: ${person.dog.age}`);
    console.log('---');
  });
};

// Function to filter by ID
const filterById = (data: Person[], id: number): Person | undefined => {
  return data.find(person => person.id === id);
};

// Main function to run the console app
const runApp = (): void => {
  const data = loadData();
  let running = true;

  while (running) {
    console.log('Welcome to the JSON data viewer!');
    console.log('1. View all data');
    console.log('2. Filter by ID');
    console.log('3. Exit');
    const choice = prompt('Please enter your choice: ');

    switch (choice) {
      case '1':
        displayAllData(data);
        break;
      case '2':
        const id = parseInt(prompt('Please enter the ID you want to filter by: '), 10);
        const result = filterById(data, id);
        if (result) {
          console.log(`Name: ${result.name}`);
          console.log(`Description: ${result.description}`);
          console.log(`Dog Name: ${result.dog.name}`);
          console.log(`Dog Age: ${result.dog.age}`);
        } else {
          console.log('ID not found.');
        }
        break;
      case '3':
        running = false;
        break;
      default:
        console.log('Invalid choice, please try again.');
    }
  }
};

runApp();
