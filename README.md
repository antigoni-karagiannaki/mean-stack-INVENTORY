# Restaurant Inventory Management System

A full-stack web application built with the MEAN stack (MongoDB, Express.js, Angular, Node.js) for managing restaurant inventory, specifically designed for beverage management.

## 🍺 Features

### Product Management
- **Multi-category Support**: Beer, Wine, and Soft Drinks
- **Dynamic Brand Selection**: Choose from predefined brands or add custom ones
- **Inventory Tracking**: Track position, pricing, and descriptions
- **CSV Data Import**: Load brand data from CSV files with fallback to hardcoded options

### User Interface
- **Responsive Design**: Built with Angular Material Design
- **Side Navigation**: Quick access to statistics and reports
- **Form Validation**: Real-time validation with user-friendly error messages
- **Multi-step Form**: Guided product entry process

### Data Management
- **MongoDB Integration**: Secure cloud database storage
- **RESTful API**: Clean API endpoints for all operations
- **Data Validation**: Server-side validation to ensure data integrity

## 🚀 Tech Stack

**Frontend:**
- Angular 17+ with Standalone Components
- Angular Material UI
- TypeScript
- RxJS for reactive programming

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- CORS enabled for cross-origin requests

**Database:**
- MongoDB Atlas (Cloud)

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB Atlas account (or local MongoDB installation)
- Git

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd mean-stack-example
```

### 2. Backend Setup
```bash
cd server
npm install
```

### 3. Environment Configuration
Create a `.env` file in the `server` directory:
```properties
ATLAS_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5200
```

### 4. Frontend Setup
```bash
cd server/client
npm install
```

### 5. CSV Data Files (Optional)
Create brand data files in `server/client/src/assets/`:
- `beer-brands.csv`
- `wine-brands.csv`
- `softdrink-brands.csv`

Example format (one brand per line):
```
AMSTEL FREE
AMSTEL RADLER
ALFA
CORONA
```

## 🏃 Running the Application

### Development Mode

**Start the Backend Server:**
```bash
cd server
npm start
```
Server runs on http://localhost:5200

**Start the Frontend:**
```bash
cd server/client
ng serve
```
Frontend runs on http://localhost:4200

### Production Build

**Build the Angular App:**
```bash
cd server/client
ng build --prod
```

**Serve from Express:**
The backend serves the built Angular app in production mode.

## 📱 Usage

### Adding Products

1. **Select Drink Type**: Choose between Beer, Wine, or Soft Drink
2. **Choose Brand**: Select from available brands or choose "Other" for custom brands
3. **Enter Details**: 
   - Position/Location in restaurant
   - Selling Price
   - Optional description
4. **Submit**: Add the product to your inventory

### Managing Inventory

- **View Products**: See all products in a sortable table
- **Edit Products**: Update product information
- **Delete Products**: Remove items from inventory
- **Statistics**: View sales data and inventory analytics (coming soon)

## 🏗️ Project Structure

```
mean-stack-example/
├── server/
│   ├── client/                 # Angular frontend
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── components/
│   │   │   │   ├── services/
│   │   │   │   └── models/
│   │   │   └── assets/         # CSV files
│   │   └── package.json
│   ├── models/                 # MongoDB schemas
│   ├── routes/                 # API routes
│   ├── server.ts              # Express server
│   ├── .env                   # Environment variables
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create new product |
| GET | `/api/products/:id` | Get product by ID |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

## 📊 Database Schema

**Product Model:**
```javascript
{
  name: String,           // Product/Brand name
  position: String,       // Location in restaurant
  type: String,          // beer, wine, softdrink
  description: String,    // Optional description
  selling_price: Number   // Price in euros
}
```

## 🔧 Configuration

### MongoDB Connection
Update the `ATLAS_URI` in your `.env` file with your MongoDB connection string.

### CSV Brand Data
Place CSV files in `src/assets/` directory. The app will automatically load brands from these files, with fallback to hardcoded arrays if files are not found.

## 🚨 Troubleshooting

### Common Issues

**CORS Errors:**
- Ensure the backend CORS configuration allows your frontend URL

**Database Connection:**
- Check your MongoDB Atlas connection string
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify username/password in connection string

**CSV Files Not Loading:**
- Files must be in `server/client/src/assets/`
- Check browser network tab for 404 errors
- Verify file names match exactly in the code

**Form Validation Errors:**
- Ensure all required fields are filled
- Check that selling price is greater than 0
- Position must be at least 5 characters long

## 🔮 Future Enhancements

- [ ] **Statistics Dashboard**: Sales analytics and reports
- [ ] **User Authentication**: Login/logout functionality
- [ ] **Inventory Alerts**: Low stock notifications
- [ ] **Barcode Scanning**: Quick product lookup
- [ ] **Export/Import**: CSV export of inventory data
- [ ] **Multi-location Support**: Support for multiple restaurant locations
- [ ] **Real-time Updates**: WebSocket integration for live inventory updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## Acknowledgments

- Angular Material for UI components
- MongoDB Atlas for cloud database hosting
- Express.js community for excellent documentation
