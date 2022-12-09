Features
users can sign into the app with their email and password
users can follow each other
users can create posts with photos and/or text
users can comment on posts
users can join groups
users can create posts within groups

Brainstorming
users
    - when they logged in
    - email & pw (db col)
    - what users like and dont like
    - users need to be able to create a posts
    - who the users are following (what kind of relationship is this?)
    - followers col
    - who the user has blocked (others users)
post    
    - length and content of posts
    - who created the post
    - how many views the post has
    - the comments on the post
    - likes of a post
    - created_at timestamp
    - what group the post belongs to (if any)
    - delete a post
comments    
    - what post the comment belongs to
    - who wrote the comment
    - create_at timestamp
    - delete a comment





users
- user_id PRIMARY KEY
- email VARCHAR(50)
- password VARCHAR(50)

middle table
user_group
- user_group_id PRIMARY KEY
- user_id FOREIGN KEY users(user_id)
- group_id FOREIGN KEY groups(group_id)

groups
- group_id PRIMARY KEY
- name VARCHAR(50)
- user_id FOREIGN KEY users(user_id)

posts
- post_id PRIMARY KEY
- user_id FOREIGN KEY users(user_id)
- group_id FOREIGN KEY groups(group_id)
- content TEXT

comments
- comment_id PRIMARY KEY
- post_id FOREIGN KEY posts(post_id)
- user_id FOREIGN KEY users(user_id)
- content TEXT



CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    password VARCHAR(10)
);

CREATE TABLE groups (
    group_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    user_id INTEGER NOT NULL REFERENCES users(user_id)
);

CREATE TABLE user_group (
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    group_id INTEGER NOT NULL REFERENCES groups(group_id)
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    -- group_id INTEGER REFERENCES groups(group_id),
    content TEXT
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES posts(post_id),
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    content TEXT
);
