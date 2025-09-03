-- Crear tabla de servicios
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  duration INTEGER NOT NULL, -- en minutos
  category TEXT DEFAULT 'general',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de galería
CREATE TABLE IF NOT EXISTS gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de información de contacto
CREATE TABLE IF NOT EXISTS contact_info (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  business_name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  address TEXT,
  whatsapp TEXT,
  instagram TEXT,
  facebook TEXT,
  opening_hours JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insertar datos de ejemplo
INSERT INTO services (name, description, price, duration, category) VALUES
('Corte Clásico', 'Corte tradicional con tijeras y máquina', 25.00, 30, 'cortes'),
('Corte + Barba', 'Corte completo con arreglo de barba', 35.00, 45, 'cortes'),
('Afeitado Tradicional', 'Afeitado con navaja y toalla caliente', 20.00, 25, 'afeitado'),
('Corte Premium', 'Corte personalizado con styling', 40.00, 60, 'premium');

INSERT INTO gallery (title, image_url, category, is_featured) VALUES
('Corte Moderno', '/placeholder.svg?height=400&width=400', 'cortes', true),
('Afeitado Clásico', '/placeholder.svg?height=400&width=400', 'afeitado', true),
('Interior Barbería', '/placeholder.svg?height=400&width=400', 'local', false),
('Estilo Vintage', '/placeholder.svg?height=400&width=400', 'cortes', false);

INSERT INTO contact_info (business_name, phone, email, address, whatsapp, instagram, facebook, opening_hours) VALUES
('Barbería Moderna', '+5930963735413', 'info@barberiamoderna.com', 'Calle Principal 123, Madrid', '+5930963735413', '@barberiamoderna', 'BarberiaModerna', 
'{"lunes": "9:00-20:00", "martes": "9:00-20:00", "miercoles": "9:00-20:00", "jueves": "9:00-20:00", "viernes": "9:00-21:00", "sabado": "9:00-19:00", "domingo": "cerrado"}');

-- Habilitar RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;

-- Políticas para lectura pública
CREATE POLICY "Allow public read access on services" ON services FOR SELECT USING (is_active = true);
CREATE POLICY "Allow public read access on gallery" ON gallery FOR SELECT USING (is_active = true);
CREATE POLICY "Allow public read access on contact_info" ON contact_info FOR SELECT USING (true);
