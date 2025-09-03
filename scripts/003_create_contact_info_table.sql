-- Tabla para información de contacto editable
CREATE TABLE IF NOT EXISTS public.contact_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT DEFAULT 'Barbería Moderna',
  address TEXT,
  phone TEXT,
  email TEXT,
  instagram TEXT,
  facebook TEXT,
  whatsapp TEXT,
  opening_hours JSONB, -- Horarios por día de la semana
  about_text TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.contact_info ENABLE ROW LEVEL SECURITY;

-- Políticas RLS - Información pública para lectura
CREATE POLICY "contact_info_select_all" ON public.contact_info FOR SELECT USING (true);

-- Insertar información inicial
INSERT INTO public.contact_info (
  business_name, 
  address, 
  phone, 
  email, 
  instagram, 
  whatsapp,
  opening_hours,
  about_text
) VALUES (
  'Barbería Moderna',
  'Calle Principal 123, Ciudad',
  '+5930963735413',
  'mirandasanty1989@gmail.com',
  '@',
  '+5930963735413',
  '{
    "lunes": {"open": "09:00", "close": "20:00", "closed": false},
    "martes": {"open": "09:00", "close": "20:00", "closed": false},
    "miercoles": {"open": "09:00", "close": "20:00", "closed": false},
    "jueves": {"open": "09:00", "close": "20:00", "closed": false},
    "viernes": {"open": "09:00", "close": "21:00", "closed": false},
    "sabado": {"open": "09:00", "close": "19:00", "closed": false},
    "domingo": {"open": "10:00", "close": "18:00", "closed": false}
  }',
  'Somos una barbería moderna que combina técnicas tradicionales con estilos contemporáneos. Nuestro equipo de profesionales está dedicado a brindarte la mejor experiencia en cuidado masculino.'
);
