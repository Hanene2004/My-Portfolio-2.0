-- Create visitors table
CREATE TABLE IF NOT EXISTS visitors (
  id BIGSERIAL PRIMARY KEY,
  visit_count BIGINT NOT NULL DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial row if not exists
INSERT INTO visitors (id, visit_count) 
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  contact_method TEXT DEFAULT 'email',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for visitors table
CREATE POLICY "Allow public read access to visitors"
  ON visitors FOR SELECT
  USING (true);

CREATE POLICY "Allow public update to visitors"
  ON visitors FOR UPDATE
  USING (true);

-- Create policies for contact_submissions table
CREATE POLICY "Allow public insert to contact_submissions"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public read to contact_submissions"
  ON contact_submissions FOR SELECT
  USING (true);
