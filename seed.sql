insert into users
(first_name, last_name, email, username, password)
values
('chris', 'childers', 'childers@yahoo.com', 'CSquared', '$2a$10$oe2opdnnfX/Bh3LoN6xvxOBg8n23Oyxug2kpcabP5fJCwzeNxe/Pa'),
('ryan', 'yim', 'email@email.com', 'Ryman', '$2a$10$oe2opdnnfX/Bh3LoN6xvxOBg8n23Oyxug2kpcabP5fJCwzeNxe/Pa'),
('victor', 'troung', 'franken@stein.net', 'VDog', '$2a$10$oe2opdnnfX/Bh3LoN6xvxOBg8n23Oyxug2kpcabP5fJCwzeNxe/Pa'),
('jason', 'boerner', 'jason@bourne.blackbriar', 'JB', '$2a$10$oe2opdnnfX/Bh3LoN6xvxOBg8n23Oyxug2kpcabP5fJCwzeNxe/Pa');

INSERT into json_packages
(name, packages, installations, scripts)
values
('Test Driven Development (TDD)', 'Chai, Chai-as-promised, and mocha', 'npm install --save-dev chai chai-as-promised mocha', '"test": "mocha", "test:watch": "mocha -w"'),
('Nodemon Developing', 'nodemon', 'npm install nodemon --save-dev', '"dev": "nodemon index.js"');

insert into reviews
(user_id, topic, content)
VALUES
(1, 'Website functionality', '"Your website is fantastic" - CSquared'),
(2, 'Templates', '"I love how you format your templates to be easily inserted into a project" - Ryman'),
(3, 'Naviagation', '"The way that you have made naviating your website is so easy. I always know where stuff is!" - VDog'),
(4, 'Awful stuff', '"i just want to complain because i am sad" - JB');

insert into message_board
(user_id, content, created_at)
values
(1, 'Hey everyone! What is up?', '2019-04-15 05:10:50'),
(2, 'i love you guys', '2019-04-15 05:10:51'),
(3, 'that was weird', '2019-04-15 05:10:52'),
(4, 'Workout!', '2019-04-15 05:10:53');