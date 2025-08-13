-- Sanat eserleri indeksleri
CREATE INDEX idx_sanat_artworks_category ON sanat_artworks(category);
CREATE INDEX idx_sanat_artworks_featured ON sanat_artworks(featured);
CREATE INDEX idx_sanat_artworks_status ON sanat_artworks(status);
CREATE INDEX idx_sanat_artworks_created_at ON sanat_artworks(created_at DESC);

-- Blog yazıları indeksleri
CREATE INDEX idx_sanat_blog_posts_published ON sanat_blog_posts(published);
CREATE INDEX idx_sanat_blog_posts_status ON sanat_blog_posts(status);
CREATE INDEX idx_sanat_blog_posts_slug ON sanat_blog_posts(slug);
CREATE INDEX idx_sanat_blog_posts_published_at ON sanat_blog_posts(published_at DESC);

-- İletişim mesajları indeksleri
CREATE INDEX idx_sanat_contact_messages_status ON sanat_contact_messages(status);
CREATE INDEX idx_sanat_contact_messages_read ON sanat_contact_messages(read);
CREATE INDEX idx_sanat_contact_messages_created_at ON sanat_contact_messages(created_at DESC);

-- Admin indeksleri
CREATE INDEX idx_sanat_admin_users_email ON sanat_admin_users(email);
CREATE INDEX idx_sanat_admin_sessions_token ON sanat_admin_sessions(token);
CREATE INDEX idx_sanat_admin_sessions_expires ON sanat_admin_sessions(expires_at);
CREATE INDEX idx_sanat_admin_sessions_user_id ON sanat_admin_sessions(user_id);
