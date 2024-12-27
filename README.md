
# Website Coffee seri 01

No responsive design for tablets and mobile yet, I will update it as soon as possible



## Installation

Install Tailwind CSS with Vite
#### 1. Create your project
```bash
  npm create vite@latest my-project -- --template react
  cd my-project
```
#### 2. Install Tailwind CSS
```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```
#### 3. Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
```bash
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

#### 4. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

#### 5. Start your build process
Run your build process with npm run dev.
```bash
  npm run dev
```

#### 6. Start using Tailwind in your project
Start using Tailwind’s utility classes to style your content.
```bash
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

## Getting Started With Swiper
There are few options on how to include/import Swiper into your project:
```bash
npm install swiper
```


## Getting Started With React-icons
```bash
npm install react-icons --save
```

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://react-tailwind-css-coffee-01.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
