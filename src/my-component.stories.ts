// Import types from Storybook for defining metadata and stories
import type { Meta, StoryObj } from "@storybook/web-components";

// Import the MyComponent type to ensure type safety in Storybook
import type { MyComponent } from "./components/my-component/my-component";

// Use the html function from 'lit' to pass args to the web component (optional)
import { html } from 'lit';

// Define metadata for the Storybook story of 'MyComponent'
const meta = {
  title: 'Components/MyComponent',
  args: {
    first: 'John',
    middle: '',
    last: 'Doe'
  }
} satisfies Meta<MyComponent> // Ensures the metadata satisfies the expected Meta type

export default meta

export const Default = {
  render: ({ first, middle, last }) =>
    html`<my-component first=${first} middle=${middle} last=${last}></my-component>`
} satisfies StoryObj<MyComponent>
