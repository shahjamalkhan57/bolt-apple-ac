/*
  # Create Blog Posts Table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `meta_desc` (text)
      - `image_url` (text)
      - `html_content` (text)
      - `created_at` (timestamp)
      - `published` (boolean)
      - `published_at` (timestamp)

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access
    - Add policy for service role write access
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  meta_desc text NOT NULL,
  image_url text NOT NULL,
  html_content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  published boolean DEFAULT false,
  published_at timestamptz
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published posts
CREATE POLICY "Allow public read access to published posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (published = true);

-- Allow service role full access
CREATE POLICY "Allow service role full access"
  ON blog_posts
  TO service_role
  USING (true)
  WITH CHECK (true);