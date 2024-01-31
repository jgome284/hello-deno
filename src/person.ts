// Create person interface
export default interface Person {
    firstName: string;
    lastName: string;
  }

// Create function with person interface as input
export function sayHello(p: Person): string {
  return `Hello, ${p.firstName}!`;
}