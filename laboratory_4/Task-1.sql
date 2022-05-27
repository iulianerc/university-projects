drop table if exists mysql_test.companies;
drop table if exists mysql_test.agents;

create table if not exists companies
(
    id       bigint unsigned PRIMARY KEY not null UNIQUE,
    name     VARCHAR(20)                 not null,
    place    VARCHAR(20),
    district VARCHAR(15) check ( district in ('Moldova', 'Ardeal', 'Banat', 'Muntenia', 'Dobrogea', 'Transilvania'))
);


create table if not exists agents  (
    id smallint unique primary key auto_increment,
    name varchar(25) not null ,
    date_employment datetime default now(),
    date_nast datetime,
    role varchar(20),
    company_id bigint unsigned,
    foreign key (company_id) references companies(id) on delete RESTRICT
);

