# Lawyer Website

A modern and responsive website for a local law office, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design with modern UI
- Consultation request form
- Email notifications
- MongoDB database integration
- Admin dashboard for managing consultations

## Prerequisites

- Node.js 18+ and npm
- MongoDB database
- SMTP server for email notifications

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd lawyer-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/lawyer-website

# SMTP Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
SMTP_FROM=noreply@lawyer-website.com

# Admin Email
ADMIN_EMAIL=admin@lawyer-website.com
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   └── page.tsx        # Home page
├── components/         # React components
├── lib/               # Utility functions
├── models/            # MongoDB models
└── styles/            # Global styles
```

## Deployment

The application can be deployed to Vercel or any other platform that supports Next.js applications.

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Configure the environment variables in the Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 