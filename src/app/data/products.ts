export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  // Row 1
  { id: '1', name: '2 Sound Rocket', price: 150, category: 'Rockets', image: 'https://images.unsplash.com/photo-1632255583840-0e1fc9075ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '2', name: '3 Sound Rocket', price: 200, category: 'Rockets', image: 'https://images.unsplash.com/photo-1700623066321-b6ea7f6db261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '3', name: '12 Shots', price: 350, category: 'Shots', image: 'https://images.unsplash.com/photo-1700623066134-50e24f27e81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '4', name: '15 Color Shots', price: 400, category: 'Shots', image: 'https://images.unsplash.com/photo-1700623066384-555c048e50e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=1080' },

  // Row 2
  { id: '5', name: '60 Max Shots', price: 850, category: 'Shots', image: 'https://images.unsplash.com/photo-1700623066357-5ee7901e8612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '6', name: '100 Shots', price: 1200, category: 'Shots', image: 'https://images.unsplash.com/photo-1700623066002-b5e2a8dcdfb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '7', name: '120 Shots', price: 1500, category: 'Shots', image: 'https://images.unsplash.com/photo-1700623065993-9e62198d187f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '8', name: '240 Multicolor Shots', price: 2800, category: 'Shots', image: 'https://images.unsplash.com/photo-1700623066425-f917e61f7636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=1080' },

  // Row 3
  { id: '9', name: '520 Multi Colour Shots', price: 5500, category: 'Shots', image: 'https://images.unsplash.com/photo-1605630642211-4cd8dd4b848b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '10', name: 'Aerial Fancy', price: 1800, category: 'Fancy', image: 'https://images.unsplash.com/photo-1765460981746-b3a585cec9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '11', name: 'Colourful Peacock', price: 600, category: 'Fancy', image: 'https://images.unsplash.com/photo-1754751768150-4ede48b44e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMXx8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '12', name: 'Digital Garlands', price: 450, category: 'Garlands', image: 'https://images.unsplash.com/photo-1546286802-8ffe4f906340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMnx8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },

  // Row 4
  { id: '13', name: 'Flower Pots', price: 250, category: 'Flower Pots', image: 'https://images.unsplash.com/photo-1690100693211-4ab951a6a9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxM3x8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '14', name: 'Fountains', price: 300, category: 'Fountains', image: 'https://images.unsplash.com/photo-1632134918952-54810c162120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNHx8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '15', name: 'Hand Shots', price: 180, category: 'Hand Items', image: 'https://images.unsplash.com/photo-1643607421268-c7e986089bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNXx8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '16', name: 'IPL Setout', price: 2500, category: 'Setouts', image: 'https://images.unsplash.com/photo-1761329828294-7daf34c2a60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNnx8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },

  // Row 5
  { id: '17', name: 'Kids Special', price: 350, category: 'Kids', image: 'https://images.unsplash.com/photo-1761016883165-94c55530bf24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxN3x8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '18', name: 'Luna Rocket', price: 120, category: 'Rockets', image: 'https://images.unsplash.com/photo-1722478646504-bd99eba6ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxOHx8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '19', name: 'Man Pasand 25', price: 500, category: 'Fancy', image: 'https://images.unsplash.com/photo-1545153827-49795cbf87c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxOXx8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '20', name: 'Naruto 30 Shots', price: 650, category: 'Shots', image: 'https://images.unsplash.com/photo-1672072960326-daf7852fb507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMHx8ZmlyZXdvcmtzJTIwY3JhY2tlcnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzU0MTA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },

  // Row 6
  { id: '21', name: 'Peacock 30', price: 700, category: 'Fancy', image: 'https://images.unsplash.com/photo-1632255583840-0e1fc9075ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=400' },
  { id: '22', name: 'Pencils', price: 80, category: 'Kids', image: 'https://images.unsplash.com/photo-1700623066321-b6ea7f6db261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=400' },
  { id: '23', name: 'Premium Fancy', price: 2200, category: 'Fancy', image: 'https://images.unsplash.com/photo-1700623066134-50e24f27e81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=400' },
  { id: '24', name: 'Rockets Category', price: 400, category: 'Rockets', image: 'https://images.unsplash.com/photo-1700623066384-555c048e50e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=400' },

  // Row 7
  { id: '25', name: 'Show Time', price: 3500, category: 'Premium', image: 'https://images.unsplash.com/photo-1700623066357-5ee7901e8612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=400' },
  { id: '26', name: 'Sound Crackers', price: 550, category: 'Sound', image: 'https://images.unsplash.com/photo-1700623066002-b5e2a8dcdfb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=400' },
  { id: '27', name: 'Sparklers', price: 100, category: 'Sparklers', image: 'https://images.unsplash.com/photo-1700623065993-9e62198d187f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=400' },
  { id: '28', name: 'Spinners', price: 150, category: 'Spinners', image: 'https://images.unsplash.com/photo-1700623066425-f917e61f7636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmaXJld29ya3MlMjBjcmFja2VycyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NTQxMDc3MHww&ixlib=rb-4.1.0&q=80&w=400' },
];
