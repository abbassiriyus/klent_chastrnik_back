create table users(
 "id" serial primary key,
 "password" text not null,
 "email" text not null,
 "phone" text not null,
 "online" timestamp default current_timestamp not null,
 "place" text,
 "image" text,
 "super_admin"  boolean default false not null,
 "povar"  boolean default false not null,
 "active"  boolean default true not null,
 "time_create" timestamp default current_timestamp not null,
  "time_update" timestamp default current_timestamp not null
);
create table contact(
 "id" serial primary key,
 "phone" text not null,
 "companiy" text not null,
 "full_name" text not null,
 "comanda" text not null,
  "time_create" timestamp default current_timestamp not null,
  "time_update" timestamp default current_timestamp not null
);



create table companiy(
 "id" serial primary key,
"image" text not null,
"phone" text not null,
"instagram" text not null,
"facebook" text not null,
"twitter" text not null,
"youtobe" text not null,
"email" text not null,
 "time_create" timestamp default current_timestamp not null,
  "time_update" timestamp default current_timestamp not null
);


create table blog_category(
 "id" serial primary key,
"title" text not null,
 "time_create" timestamp default current_timestamp not null,
  "time_update" timestamp default current_timestamp not null
);



create table blog(
 "id" serial primary key,
 "title" text not null,
 "time" timestamp default current_timestamp not null,
 "time_create" timestamp default current_timestamp not null,
 "time_update" timestamp default current_timestamp not null
);
create table blog_category_conect(
 "id" serial primary key,
 "blog_id" integer not null,
 "category_id" integer not null,
 "time_create" timestamp default current_timestamp not null,
 "time_update" timestamp default current_timestamp not null
);
create table blog_category(
 "id" serial primary key,

 "time_create" timestamp default current_timestamp not null,
  "time_update" timestamp default current_timestamp not null
);