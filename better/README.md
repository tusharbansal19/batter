# Better.com Replica

A modern, responsive React and Next.js application that replicates the design and functionality of Better.com's mortgage platform.

## 🚀 Features

- **Four Main Pages**: Home, About Us, Mortgage Calculator, and Start page
- **Interactive Mortgage Calculator**: Real-time payment calculations with comprehensive inputs
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design matching Better.com's aesthetic
- **Working Navigation**: Seamless routing between all pages
- **Interactive Components**: Working forms, buttons, and user interactions

## 📁 Project Structure

```
better/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home page
│   │   ├── about-us/
│   │   │   └── page.tsx            # About Us page
│   │   ├── mortgage-calculator/
│   │   │   └── page.tsx            # Mortgage Calculator page
│   │   ├── start/
│   │   │   └── page.tsx            # Start page
│   │   ├── layout.tsx              # Root layout
│   │   └── globals.css             # Global styles
│   └── components/
│       ├── Header.tsx              # Shared navigation header
│       └── Footer.tsx              # Shared footer component
├── package.json
├── next.config.ts
├── tailwind.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React 19.1.0** - Frontend framework
- **Next.js 15.5.2** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **ESLint** - Code linting and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd better
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Pages Overview

### 🏠 Home Page (`/`)
- Hero section with AI-powered mortgage messaging
- Interactive testimonial section
- Service cards with hover effects
- Call-to-action sections
- Company statistics and benefits

### 🚀 Start Page (`/start`)
- Interactive option selection (Buying, Refinancing, Getting Cash)
- Dynamic continue button
- Progress indicator
- Company statistics
- Benefits overview

### 🧮 Mortgage Calculator (`/mortgage-calculator`)
- **Real-time calculations** for:
  - Monthly mortgage payments
  - Principal and interest breakdown
  - Property taxes, insurance, PMI, HOA fees
  - Total loan cost and interest
- Interactive form inputs
- FAQ accordion section
- Testimonial carousel
- Educational content about mortgage components

### 📖 About Us Page (`/about-us`)
- Company mission and values
- Interactive timeline with company milestones
- Backed by section with investor logos
- Related posts and articles
- Company statistics and achievements

## 🎨 Design Features

- **Color Scheme**: Green primary color (#065f46) matching Better.com branding
- **Typography**: Clean, modern fonts with proper hierarchy
- **Responsive Grid**: CSS Grid and Flexbox for responsive layouts
- **Hover Effects**: Smooth transitions and interactive feedback
- **Mobile-First**: Optimized for mobile devices with responsive breakpoints

## 🔧 Key Components

### Header Component
- Responsive navigation menu
- Logo and branding
- Phone number and sign-in button
- Mobile-friendly design

### Footer Component
- Company information
- Resource links
- Contact information
- Legal links and disclaimers

### Mortgage Calculator
- Real-time calculation engine
- Form validation
- Interactive inputs with proper TypeScript typing
- Results display with breakdown

## 📊 Calculator Features

The mortgage calculator includes:

- **Home Price**: Property purchase price
- **Down Payment**: Amount and percentage
- **Loan Term**: 15, 20, 25, or 30 years
- **Interest Rate**: Annual percentage rate
- **Property Tax**: Annual property tax amount
- **Home Insurance**: Annual insurance cost
- **PMI**: Private Mortgage Insurance (if applicable)
- **HOA Fees**: Homeowners Association fees (if applicable)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build settings if needed

### Heroku
1. Add a `Procfile` with: `web: npm start`
2. Deploy using Heroku CLI or GitHub integration

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Future Enhancements

- [ ] User authentication and accounts
- [ ] Real-time rate updates
- [ ] Document upload functionality
- [ ] Email notifications
- [ ] Advanced calculator features
- [ ] Integration with real mortgage APIs
- [ ] Multi-language support
- [ ] Dark mode theme

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is for educational purposes. Better.com is a trademark of Better Home & Finance Holding Company.

## 📞 Support

For questions or support, please contact:
- Email: hello@better.com
- Phone: 415-523-8837

## 🙏 Acknowledgments

- Better.com for the design inspiration
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Lucide for the beautiful icons

---

**Note**: This is a replica project for educational purposes. All Better.com branding and content are property of Better Home & Finance Holding Company.