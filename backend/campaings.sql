CREATE TABLE IF NOT EXISTS campaigns (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL,
    clicks INT NOT NULL,
    cost NUMERIC(10, 2) NOT NULL,
    impressions INT NOT NULL
);

INSERT INTO campaigns (name, status, clicks, cost, impressions) VALUES
('Summer Sale', 'Active', 150, 45.99, 1000),
('Black Friday', 'Paused', 320, 89.50, 2500),
('Diwali Blast', 'Active', 210, 60.00, 1800),
('Winter Arc', 'Active', 95, 30.25, 900),
('Christmas Sale', 'Paused', 430, 120.75, 3500),
('Holi Campaign', 'Active', 80, 25.00, 5000),
('New Year Offer', 'Paused', 260, 70.10, 2000),
('Valentine Day', 'Active', 140, 55.55, 1600),
('Dhanteras Deals', 'Paused', 110, 40.00, 1300),
('App Promotion', 'Active', 300, 95.90, 4000);