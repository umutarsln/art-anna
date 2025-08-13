-- Drop existing tables if they exist
DROP TABLE IF EXISTS artworks CASCADE;
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS contact_messages CASCADE;

-- Create sanat_artworks table
CREATE TABLE IF NOT EXISTS sanat_artworks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL CHECK (category IN ('digital', 'photography')),
  image_url TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sanat_blog_posts table
CREATE TABLE IF NOT EXISTS sanat_blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sanat_contact_messages table
CREATE TABLE IF NOT EXISTS sanat_contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_sanat_artworks_category ON sanat_artworks(category);
CREATE INDEX IF NOT EXISTS idx_sanat_artworks_featured ON sanat_artworks(featured);
CREATE INDEX IF NOT EXISTS idx_sanat_artworks_created_at ON sanat_artworks(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sanat_blog_posts_published ON sanat_blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_sanat_blog_posts_published_at ON sanat_blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_sanat_contact_messages_created_at ON sanat_contact_messages(created_at DESC);
