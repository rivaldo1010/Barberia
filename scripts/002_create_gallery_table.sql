-- Tabla para la galería de imágenes
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  description TEXT,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  category TEXT DEFAULT 'general', -- 'cortes', 'barbas', 'salon', 'general'
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Políticas RLS - Galería pública para lectura
CREATE POLICY "gallery_select_all" ON public.gallery FOR SELECT USING (true);

-- Insertar imágenes de ejemplo
INSERT INTO public.gallery (title, description, image_url, alt_text, category, is_featured, display_order) VALUES
('Corte Moderno', 'Estilo contemporáneo con degradado', '/placeholder.svg?height=400&width=400', 'Corte moderno con degradado', 'cortes', true, 1),
('Barba Clásica', 'Arreglo tradicional de barba', '/placeholder.svg?height=400&width=400', 'Barba clásica bien arreglada', 'barbas', true, 2),
('Interior del Salón', 'Ambiente acogedor y moderno', '/placeholder.svg?height=400&width=400', 'Interior moderno de barbería', 'salon', false, 3),
('Corte Ejecutivo', 'Estilo profesional y elegante', '/placeholder.svg?height=400&width=400', 'Corte ejecutivo profesional', 'cortes', false, 4);
