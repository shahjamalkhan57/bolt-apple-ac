/*
  # Create blog_posted table

  1. New Tables
    - `blog_posted`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `meta` (text)
      - `url` (text)
      - `html` (text)
      - `posted` (boolean)
      - `something` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `blog_posted` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS blog_posted (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  meta text,
  url text,
  html text,
  posted boolean DEFAULT false,
  something boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posted ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON blog_posted
  FOR SELECT
  TO public
  USING (true);

-- Add trigger to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posted_updated_at
  BEFORE UPDATE
  ON blog_posted
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();