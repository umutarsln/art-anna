-- Update artwork images with real art images
UPDATE artworks SET image_url = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop&crop=center' WHERE title = 'Digital Dreams';
UPDATE artworks SET image_url = 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center' WHERE title = 'Urban Reflections';
UPDATE artworks SET image_url = 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=800&fit=crop&crop=center' WHERE title = 'Abstract Emotions';
UPDATE artworks SET image_url = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=center' WHERE title = 'Nature Study';
UPDATE artworks SET image_url = 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=800&fit=crop&crop=center' WHERE title = 'Portrait Series';
UPDATE artworks SET image_url = 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=800&fit=crop&crop=center' WHERE title = 'Mixed Media';

-- Update blog post images with art-related themes
UPDATE blog_posts SET image_url = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&crop=center' WHERE title LIKE '%Digital%' OR title LIKE '%Dijital%';
UPDATE blog_posts SET image_url = 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop&crop=center' WHERE title LIKE '%Color%' OR title LIKE '%Renk%';
UPDATE blog_posts SET image_url = 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop&crop=center' WHERE title LIKE '%Photography%' OR title LIKE '%Fotoğraf%';
UPDATE blog_posts SET image_url = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center' WHERE title LIKE '%Art%' OR title LIKE '%Sanat%';
