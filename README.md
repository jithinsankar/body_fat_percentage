# Body Fat Percentage Calculator

This is a simple body fat percentage calculator built using Vite and React. The calculator uses a formula commonly used in health and fitness to estimate body fat percentage based on various inputs.

## How to Use

1. Clone the repository to your local machine:

```bash
git clone https://github.com/jithinsankar/body_fat_percentage.git

```

2. Navigate to the project directory:

```bash
cd body-fat-calculator

```

3. Install dependencies:

```bash
npm install

```

4. Start the development server:

```bash
npm run dev

```

5. Open your browser and navigate to http://localhost:5173 to see it in action.

## Formula

The body fat percentage is calculated using the following formula:

For women:

```math
\text{ body fat} = 163.205 \times \log_{10}(\text{waist} + \text{hip} - \text{neck}) - 97.684 \times \log_{10}(\text{height}) - 78.387
```

For men:

```math
\text{ body fat} = 86.010 \times \log_{10}(\text{abdomen} - \text{neck}) - 70.041 \times \log_{10}(\text{height}) + 36.76
```

### Formula Source

The body fat percentage formula used in this calculator is sourced from [healthline](https://www.healthline.com/health/how-to-measure-body-fat#body-circumference). You can visit the website for more details on the calculation method and its accuracy.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
