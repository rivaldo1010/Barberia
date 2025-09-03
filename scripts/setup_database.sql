-- Crear tabla de servicios
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  duration INTEGER,
  category TEXT DEFAULT 'general',
  is_active BOOLEAN DEFAULT true,
  is_popular BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de galería
CREATE TABLE IF NOT EXISTS gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de información de contacto
CREATE TABLE IF NOT EXISTS contact_info (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT,
  email TEXT,
  address TEXT,
  hours TEXT,
  whatsapp TEXT,
  instagram TEXT,
  facebook TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insertar datos de ejemplo
INSERT INTO services (name, description, price, duration, category, is_popular) VALUES
('Corte Clásico', 'Corte tradicional con tijeras y máquina', 25.00, 30, 'cortes', true),
('Corte Moderno', 'Estilos contemporáneos y tendencias actuales', 35.00, 45, 'cortes', true),
('Afeitado Tradicional', 'Afeitado con navaja y toalla caliente', 20.00, 25, 'barbas', false),
('Arreglo de Barba', 'Perfilado y mantenimiento de barba', 15.00, 20, 'barbas', false);

INSERT INTO gallery (title, image_url, category, is_featured) VALUES
('Corte Moderno 1', '/modern-haircut-barbershop.png', 'cortes', true),
('Afeitado Clásico', '/classic-shave-barbershop.png', 'barbas', true),
('Interior Barbería', '/modern-barbershop.png', 'salon', false),
('Estilo Vintage', '/vintage-haircut-style.png', 'cortes', false);

INSERT INTO contact_info (phone, email, address, hours, whatsapp, instagram, facebook) VALUES
('+1 234 567 8900', 'info@barberia.com', '123 Main Street, Ciudad', 'Lun-Sab: 9:00-19:00', '+1234567890', '@barberia_moderna', 'barberia.moderna');

-- Habilitar RLS (Row Level Security)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;

-- Políticas básicas (permitir lectura pública, escritura solo para autenticados)
CREATE POLICY "Allow public read access" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON gallery FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON contact_info FOR SELECT USING (true);
