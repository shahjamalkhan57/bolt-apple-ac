/*
  # Create SEO Blogs Table

  1. New Tables
    - `seo_blogs`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `seo_blogs` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS seo_blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE seo_blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON seo_blogs
  FOR SELECT
  TO public
  USING (true);