import { Product } from "./types/Product";
import bcrypt from 'bcryptjs'
import { User } from './models/userModel'

export const sampleProducts: Product[] = [
        {
            name: "EcoCharge Pro 150",
            slug: "ecocharge-pro-150",
            image: ".././public/images/pd11 (3).png",
            category: "Fast Charger",
            brand: "EcoCharge",
            price: 29999,
            countInStock: 10,
            description: "A high-performance fast charger suitable for all EVs, with a sleek design and advanced safety features.",
            rating: 4,
            numReviews: 230,
        },
        {
            name: "TurboCharger X75",
            slug: "turbocharger-x75",
            image: ".././public/images/pd12 (1).png",
            category: "Home Charger",
            brand: "TurboTech",
            price: 18999,
            countInStock: 25,
            description: "Compact and efficient home charger with smart energy management and app connectivity.",
            rating: 4.5,
            numReviews: 120,
        },
        {
            name: "PowerMax Ultra",
            slug: "powermax-ultra",
            image: ".././public/images/pd13 (2).png",
            category: "Commercial Charger",
            brand: "PowerMax",
            price: 75999,
            countInStock: 5,
            description: "Ideal for commercial use, this charger offers multiple charging ports and robust durability.",
            rating: 5,
            numReviews: 85,
        },
        {
            name: "VoltEase 50",
            slug: "voltease-50",
            image: ".././public/images/pd13 (3).png",
            category: "Portable Charger",
            brand: "VoltEase",
            price: 12999,
            countInStock: 50,
            description: "Lightweight and portable EV charger perfect for on-the-go charging with universal compatibility.",
            rating: 4.5,
            numReviews: 310,
        },{
            name: "EcoCharge Pro 155",
            slug: "ecocharge-pro-155",
            image: ".././public/images/pd11 (3).png",
            category: "Fast Charger",
            brand: "EcoCharge",
            price: 29999,
            countInStock: 10,
            description: "A high-performance fast charger suitable for all EVs, with a sleek design and advanced safety features.",
            rating: 3,
            numReviews: 230,
        },
        {
            name: "TurboCharger X78",
            slug: "turbocharger-x78",
            image: ".././public/images/pd12 (1).png",
            category: "Home Charger",
            brand: "TurboTech",
            price: 18999,
            countInStock: 0,
            description: "Compact and efficient home charger with smart energy management and app connectivity.",
            rating: 2.5,
            numReviews: 12,
        }
    ]

export const sampleUsers: User[] = [
  {
    name: 'Zynetic',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'ZyneticUser',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]