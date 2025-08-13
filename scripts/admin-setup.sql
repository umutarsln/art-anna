-- Admin users tablosu
CREATE TABLE IF NOT EXISTS sanat_admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Admin sessions tablosu
CREATE TABLE IF NOT EXISTS sanat_admin_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES sanat_admin_users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Artworks tablosuna admin alanları ekle
ALTER TABLE sanat_artworks 
ADD COLUMN IF NOT EXISTS views INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived'));

-- Blog posts tablosuna admin alanları ekle
ALTER TABLE sanat_blog_posts 
ADD COLUMN IF NOT EXISTS views INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived'));

-- Contact messages tablosuna admin alanları ekle
ALTER TABLE sanat_contact_messages 
ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied'));

-- İndeksler
CREATE INDEX IF NOT EXISTS idx_admin_sessions_token ON sanat_admin_sessions(token);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires ON sanat_admin_sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_artworks_status ON sanat_artworks(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON sanat_blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON sanat_contact_messages(status);

-- İlk admin kullanıcı (şifre: admin123)
INSERT INTO sanat_admin_users (email, password_hash, name, role) VALUES 
('admin@sanatci.com', '$2b$10$rQZ8kHWKQVz8kHWKQVz8kOQVz8kHWKQVz8kHWKQVz8kHWKQVz8kH', 'Admin User', 'admin')
ON CONFLICT (email) DO NOTHING;
