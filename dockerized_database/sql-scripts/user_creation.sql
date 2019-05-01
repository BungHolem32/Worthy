
-- CREATE LOCALHOST USER
CREATE user ilan@localhost identified by 'ilan';
GRANT ALL PRIVILEGES ON *.* TO 'ilan'@'localhost' WITH GRANT OPTION;
ALTER USER 'ilan'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ilan';

-- CREATE USER FOR ALL IPS
CREATE user ilan@'%' identified by 'ilan';
GRANT ALL PRIVILEGES ON *.* TO 'ilan'@'%' WITH GRANT OPTION;
ALTER USER 'ilan'@'%' IDENTIFIED WITH mysql_native_password BY 'ilan';

-- REFRESH ALL PRIVILEGES
FLUSH PRIVILEGES;


