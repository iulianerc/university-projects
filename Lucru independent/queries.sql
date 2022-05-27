# 1.
select *
from STUDENT;
# 2.
select ORAS
from STUDENT
where ORAS is not null;
# 3.
select nume, PRENUME
from STUDENT
where NUME = 'Petrov';
# 4.
select *
from STUDENT
where BURSA is not null
  and BURSA > 0
  and ANUL > 1;
# 5.
select *
from CURS;
# 6.
select *
from NOTE_EXAM
where CURS_ID = 12;
# 7.
select *
from STUDENT
order by ANUL, PRENUME, NUME, BURSA;



# 8.


# 9.


# 83.
# 84.
# 85.

# 86.
drop view if exists student_from_chisinau;

create view student_from_chisinau as
select *
from STUDENT
where ORAS like '%Chisinau%';

select *
from student_from_chisinau;
# 87.
drop view if exists success_students;
create view success_students as
select *
from STUDENT
where (select count(ST_ID)
       from NOTE_EXAM
       where STUDENT.ST_ID = NOTE_EXAM.ST_ID
         and NOTA >= 5) > 1
;

select *
from success_students;
# 88.
set autocommit = 0;
start transaction;

delete
from CURS
where not exists(
        select NOTE_EXAM.CURS_ID
        from NOTE_EXAM
        where CURS.CURS_ID = NOTE_EXAM.CURS_ID
    );

select *
from CURS;

rollback;
# 89.
select *
from STUDENT
where ST_ID in (select NOTE_EXAM.ST_ID
                from NOTE_EXAM
                group by NOTE_EXAM.ST_ID
                having SUM(NOTA) > 8 /* Am pus 8 pentru a vedea rezultat*/
)
;
# 90.

# 91.

# 92.

# 93.

# 94.

# 95.
alter table STUDENT
    drop index year,
    add index year (ANUL ASC);
# 96.
drop view if exists students_marks;

create view students_marks as
select STUDENT.*, NE.NOTA, NE.EXAM_ID, NE.DATA_EXAM, NE.CURS_ID
from STUDENT
         left join NOTE_EXAM NE on STUDENT.ST_ID = NE.ST_ID
order by STUDENT.ST_ID;


