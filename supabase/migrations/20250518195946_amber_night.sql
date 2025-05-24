/*
  # Update blog_posted table schema

  1. Changes
    - Add published and published_at columns
    - Rename posted to created
    - Remove something column
    - Update meta to meta_desc
    - Rename url to image_url
    - Rename html to html_content

  2. Security
    - Maintain existing RLS policies
*/

ALTER TABLE blog_posted 
  RENAME COLUMN posted TO created;

ALTER TABLE blog_posted 
  RENAME COLUMN meta TO meta_desc;

ALTER TABLE blog_posted 
  RENAME COLUMN url TO image_url;

ALTER TABLE blog_posted 
  RENAME COLUMN html TO html_content;

ALTER TABLE blog_posted 
  DROP COLUMN something;

ALTER TABLE blog_posted 
  ADD COLUMN published boolean DEFAULT false,
  ADD COLUMN published_at timestamptz;