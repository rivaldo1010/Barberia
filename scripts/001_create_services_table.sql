-- Tabla para servicios de la barbería
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  duration INTEGER, -- duración en minutos
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Políticas RLS - Los servicios son públicos para lectura
CREATE POLICY "services_select_all" ON public.services FOR SELECT USING (true);

-- Insertar servicios iniciales
INSERT INTO public.services (name, description, price, duration) VALUES
('Corte Clásico', 'Corte tradicional con tijeras y máquina', 25.00, 30),
('Corte + Barba', 'Corte completo con arreglo de barba', 35.00, 45),
('Afeitado Tradicional', 'Afeitado con navaja y toalla caliente', 20.00, 25),
('Corte Premium', 'Corte personalizado con lavado y peinado', 40.00, 60),
('Arreglo de Barba', 'Perfilado y arreglo de barba', 15.00, 20);
