-- RLS'yi etkinleştir
ALTER TABLE sanat_artworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE sanat_blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE sanat_contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE sanat_admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sanat_admin_sessions ENABLE ROW LEVEL SECURITY;

-- Public okuma politikaları (frontend için)
CREATE POLICY "Public can read published artworks" ON sanat_artworks
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public can read published blog posts" ON sanat_blog_posts
  FOR SELECT USING (published = true AND status = 'published');

-- Contact messages için insert politikası
CREATE POLICY "Anyone can insert contact messages" ON sanat_contact_messages
  FOR INSERT WITH CHECK (true);

-- Admin politikaları (admin paneli için)
CREATE POLICY "Admins can do everything on artworks" ON sanat_artworks
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM sanat_admin_users 
      WHERE email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

CREATE POLICY "Admins can do everything on blog posts" ON sanat_blog_posts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM sanat_admin_users 
      WHERE email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

CREATE POLICY "Admins can read contact messages" ON sanat_contact_messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM sanat_admin_users 
      WHERE email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

CREATE POLICY "Admins can update contact messages" ON sanat_contact_messages
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM sanat_admin_users 
      WHERE email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

-- Admin users tablosu için politikalar
CREATE POLICY "Admins can read admin users" ON sanat_admin_users
  FOR SELECT USING (
    email = current_setting('request.jwt.claims', true)::json->>'email'
  );

-- Admin sessions için politikalar
CREATE POLICY "Users can manage their own sessions" ON sanat_admin_sessions
  FOR ALL USING (
    user_id IN (
      SELECT id FROM sanat_admin_users 
      WHERE email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );
