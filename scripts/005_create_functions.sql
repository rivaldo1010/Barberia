-- Función para obtener información de contacto
CREATE OR REPLACE FUNCTION public.get_contact_info()
RETURNS TABLE (
  business_name TEXT,
  address TEXT,
  phone TEXT,
  email TEXT,
  instagram TEXT,
  facebook TEXT,
  whatsapp TEXT,
  opening_hours JSONB,
  about_text TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ci.business_name,
    ci.address,
    ci.phone,
    ci.email,
    ci.instagram,
    ci.facebook,
    ci.whatsapp,
    ci.opening_hours,
    ci.about_text
  FROM public.contact_info ci
  LIMIT 1;
END;
$$;

-- Función para obtener servicios activos
CREATE OR REPLACE FUNCTION public.get_active_services()
RETURNS TABLE (
  id UUID,
  name TEXT,
  description TEXT,
  price DECIMAL(10,2),
  duration INTEGER,
  image_url TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    s.id,
    s.name,
    s.description,
    s.price,
    s.duration,
    s.image_url
  FROM public.services s
  WHERE s.is_active = true
  ORDER BY s.name;
END;
$$;

-- Función para obtener galería ordenada
CREATE OR REPLACE FUNCTION public.get_gallery_images(category_filter TEXT DEFAULT NULL)
RETURNS TABLE (
  id UUID,
  title TEXT,
  description TEXT,
  image_url TEXT,
  alt_text TEXT,
  category TEXT,
  is_featured BOOLEAN
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    g.id,
    g.title,
    g.description,
    g.image_url,
    g.alt_text,
    g.category,
    g.is_featured
  FROM public.gallery g
  WHERE (category_filter IS NULL OR g.category = category_filter)
  ORDER BY g.is_featured DESC, g.display_order ASC, g.created_at DESC;
END;
$$;
