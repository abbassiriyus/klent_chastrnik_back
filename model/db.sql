create table users(
 "id" serial primary key,
 "phone" text not null,
 "position" text not null,
 "inn" text not null,
 "litso" text,
 "image" text,
 "type" text,
 "nomer_registratsiya" integer,
 "lastname" text,
 "firstname" text,
 "name" text,
 "balanse" integer default 0 not null,
 "komisiya" integer default 0 not null,
 "min-komisiya" integer default 0 not null,
 "super_admin" boolean default false not null,
 "time_create" timestamp default current_timestamp not null,
  "time_update" timestamp default current_timestamp not null
);
create table contacts(
 "id" serial primary key,
 "phone" text not null,
 "companiy" text not null,
 "full_name" text not null,
 "comanda" text not null,
  "time_create" timestamp default current_timestamp not null,
  "time_update" timestamp default current_timestamp not null
);
create table companies(
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
create table blog_categories(
 "id" serial primary key,
"title" text not null,
 "time_create" timestamp default current_timestamp not null,
  "time_update" timestamp default current_timestamp not null
);
create table blogs(
 "id" serial primary key,
 "title" text not null,
 "time" timestamp default current_timestamp not null,
 "time_create" timestamp default current_timestamp not null,
 "time_update" timestamp default current_timestamp not null
);
create table blog_category_connect(
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