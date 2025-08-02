import { Jersey } from '../types';

export const mockJerseys: Jersey[] = [
  {
    id: '1',
    name: 'Barcelona Home Jersey 2024',
    nameBangla: 'বার্সেলোনা হোম জার্সি ২০২৪',
    price: 2500,
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    images: [
      'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
      'https://images.pexels.com/photos/1884344/pexels-photo-1884344.jpeg'
    ],
    sizes: ['M', 'L', 'XL'],
    category: 'Football',
    description: 'Official Barcelona home jersey for 2024 season. Premium quality fabric with moisture-wicking technology.',
    descriptionBangla: '২০২৪ সিজনের জন্য অফিসিয়াল বার্সেলোনা হোম জার্সি। প্রিমিয়াম কোয়ালিটি ফ্যাব্রিক।',
    featured: true,
    inStock: true,
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    name: 'Real Madrid Away Jersey',
    nameBangla: 'রিয়াল মাদ্রিদ অ্যাওয়ে জার্সি',
    price: 2800,
    image: 'https://images.pexels.com/photos/1884344/pexels-photo-1884344.jpeg',
    images: [
      'https://images.pexels.com/photos/1884344/pexels-photo-1884344.jpeg',
      'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    category: 'Football',
    description: 'Premium Real Madrid away jersey with latest design and comfortable fit.',
    descriptionBangla: 'লেটেস্ট ডিজাইন এবং আরামদায়ক ফিট সহ প্রিমিয়াম রিয়াল মাদ্রিদ অ্যাওয়ে জার্সি।',
    featured: true,
    inStock: true,
    createdAt: '2024-01-02',
  },
  {
    id: '3',
    name: 'Manchester United Home',
    nameBangla: 'ম্যানচেস্টার ইউনাইটেড হোম',
    price: 2600,
    image: 'https://images.pexels.com/photos/1618558/pexels-photo-1618558.jpeg',
    images: [
      'https://images.pexels.com/photos/1618558/pexels-photo-1618558.jpeg'
    ],
    sizes: ['M', 'L', 'XL'],
    category: 'Football',
    description: 'Classic Manchester United home jersey with traditional red color.',
    descriptionBangla: 'ঐতিহ্যবাহী লাল রঙের ক্লাসিক ম্যানচেস্টার ইউনাইটেড হোম জার্সি।',
    featured: false,
    inStock: true,
    createdAt: '2024-01-03',
  },
  {
    id: '4',
    name: 'Liverpool Third Kit',
    nameBangla: 'লিভারপুল থার্ড কিট',
    price: 2400,
    image: 'https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg',
    images: [
      'https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg'
    ],
    sizes: ['M', 'L', 'XL'],
    category: 'Football',
    description: 'Liverpool third kit with unique design and comfortable material.',
    descriptionBangla: 'অনন্য ডিজাইন এবং আরামদায়ক উপাদান সহ লিভারপুল থার্ড কিট।',
    featured: true,
    inStock: true,
    createdAt: '2024-01-04',
  },
  {
    id: '5',
    name: 'Chelsea Away Jersey',
    nameBangla: 'চেলসি অ্যাওয়ে জার্সি',
    price: 2700,
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
    images: [
      'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg'
    ],
    sizes: ['M', 'L', 'XL'],
    category: 'Football',
    description: 'Modern Chelsea away jersey with excellent quality and fit.',
    descriptionBangla: 'চমৎকার গুণমান এবং ফিট সহ আধুনিক চেলসি অ্যাওয়ে জার্সি।',
    featured: false,
    inStock: true,
    createdAt: '2024-01-05',
  },
  {
    id: '6',
    name: 'Arsenal Home Kit',
    nameBangla: 'আর্সেনাল হোম কিট',
    price: 2550,
    image: 'https://images.pexels.com/photos/1618558/pexels-photo-1618558.jpeg',
    images: [
      'https://images.pexels.com/photos/1618558/pexels-photo-1618558.jpeg'
    ],
    sizes: ['M', 'L', 'XL'],
    category: 'Football',
    description: 'Classic Arsenal home kit with traditional red and white colors.',
    descriptionBangla: 'ঐতিহ্যবাহী লাল এবং সাদা রঙের ক্লাসিক আর্সেনাল হোম কিট।',
    featured: true,
    inStock: true,
    createdAt: '2024-01-06',
  },
];